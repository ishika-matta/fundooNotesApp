
import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { UserService } from 'src/app/services/userServices/user.service';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-collab-dialog-box',
  templateUrl: './collab-dialog-box.component.html',
  styleUrls: ['./collab-dialog-box.component.scss']
})
export class CollabDialogBoxComponent implements OnInit {
  @Input() card: any;
  @Output() messageEvent = new EventEmitter<string>();

  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  email = localStorage.getItem('email');
  baseUrlPic = environment.baseUrlPic;
  userPic: any;
  collab_user = new FormControl();
  cObj: any;
  coll: any;
  searchUsers: any;
  filteredSearchUsers: Observable<any>;
  collab_value: any;
  message: any;
  collabs: any = [];
  collabObjWithoutNote : any;
  collabArray = [];
  collabIndex:any;


  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData, private dataService: DataService,
     private noteService: NoteService, private userService: UserService) {

    this.cObj = { noteId: dialogData.card };
  }


  ngOnInit() {
    this.getCollabUsers();
  }

  private filter(value: string): string[] {
    this.collab_value = this.searchUsers.filter(user1 => user1.email.toString().toLowerCase().includes(value.toString().toLowerCase()));
    console.log('filterrr....', this.collab_value);
    return this.collab_value;
  }



  searchList(collab) {
    const obj = {
      'searchWord': collab,
    };
    this.userService.searchUser(obj).subscribe((response: any) => {
      this.searchUsers = response.data.details;
      console.log('SearchUsers   ', this.searchUsers);
      this.filteredSearchUsers = this.collab_user.valueChanges
        .pipe(
          startWith(''),
          map(value => this.filter(value))
        );
      console.log('filteredSearchUsers  ', this.filteredSearchUsers);
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  onCreateCollab() {
    if(this.cObj.noteId){
    let collabObj = {
      'email': this.collab_value[0].email,
      'firstName': this.collab_value[0].firstName,
      'lastName': this.collab_value[0].lastName,
      'userId': this.collab_value[0].userId,
    };

    this.noteService.addCollabToNotes(collabObj, this.cObj.noteId).subscribe((response: any) => {
      console.log('collab .............', response);
      this.coll='';
      this.getCollabUsers();
    }, (error) => {
      console.log(error);
    });
  }
  else{
    console.log('without card id',this.collab_value[0].email);
    if(this.collab_value[0].email){
    this.collabObjWithoutNote = {
      'email': this.collab_value[0].email,
      'firstName': this.collab_value[0].firstName,
      'lastName': this.collab_value[0].lastName,
      'userId': this.collab_value[0].userId,
    };
    this.coll='';
    this.dataService.collabMessage(this.collabObjWithoutNote);
   
    this.getCollabUsers();

  }
}
}


  onSave() {
    this.dialogRef.close('Closed');
  }

  getCollabUsers() {
    if(this.cObj.noteId){
    let data = {
      'id': this.cObj.noteId,
    };
    this.noteService.patchCollabToNotes(data).subscribe((response: any) => {
      console.log('patched usersssss', response);
      this.messageEvent.emit(response);

      this.collabs = response.collaborators;
      console.log(this.collabs);
    }, (error) => {
      console.log(error);
    });
  }
  else{
    console.log('not inb card');
   // this.collabs =this.collabObjWithoutNote;
   console.log("v0bcvb c0",this.collabObjWithoutNote);
   if(this.collabObjWithoutNote){
    //this.dataService.collabMessage(this.collabObjWithoutNote);
    this.collabArray.push(this.collabObjWithoutNote);
   // console.log(this.collabs);
    console.log(this.collabArray);
  }
  }
}


  onDeleteCollab(collabUserId) {
    if(this.cObj.noteId){
    let data = {
      'id': this.cObj.noteId,
      'userId': collabUserId,
    };
    this.noteService.deleteCollabToNotes(data).subscribe((response: any) => {
      console.log('delted usersssss', response);
      this.dataService.changeMessage("Collaborator deleted");
      this.getCollabUsers();

    }, (error) => {
      console.log(error);
    });
  }

// else{
//   this.collabIndex = this.collabArray.findIndex(i => i.collabUserId === this.collabObjWithoutNote.collabUserId);
//     console.log("index....", this.collabArray.findIndex(i => i.collabUserId === this.collabObjWithoutNote.collabUserId));
//     this.collabArray.splice(this.collabIndex, 1);
// }
}
}