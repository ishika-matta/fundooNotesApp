import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-collab-dialog-box',
  templateUrl: './collab-dialog-box.component.html',
  styleUrls: ['./collab-dialog-box.component.scss']
})
export class CollabDialogBoxComponent implements OnInit {
  @Input() card: any;
  
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  email = localStorage.getItem('email');
  pic = localStorage.getItem('pic');
  baseUrlPic = environment.baseUrlPic;
  userPic:any;
  collab_user= new FormControl();
  cObj:any;
  searchUsers:any;

  constructor( public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData , private noteService: NoteService, private userService: UserService) {

    this.cObj = {noteId: dialogData.card};
    console.log('dscdscs...', this.cObj);
  
    }
    

  ngOnInit() {
    
  }

  getPic() {
    this.pic = localStorage.getItem('pic');
    this.userPic = this.baseUrlPic + this.pic;
  }

  onKeyUp(event: any) {
    const obj = {
      searchWord: event,
    };
    

    this.userService.searchUser(obj).subscribe((response: any) => {
      this.searchUsers=response.data.details;
      console.log(this.searchUsers);
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  onCreateCollab() {
    let collabObj = {
      'noteIdList': this.cObj.noteId,
      'collaborators': this.collab_user.value,
      
      };

    this.noteService.addCollabToNotes(collabObj).subscribe((response: any) => {
       console.log('collab .............', response);
      
       // this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error);
    });
  }


}
