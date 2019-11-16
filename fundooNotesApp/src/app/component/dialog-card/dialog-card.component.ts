import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayComponent } from '../display/display.component';
import { Inject } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
import { TakeNote } from '../../models/take-note.model';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss']
})
export class DialogCardComponent implements OnInit {
  options: any;
  noteObj: any = new TakeNote();
  noteObj1: any;
  title: any = new FormControl();
  description: any = new FormControl();
  message = 'dailog card';
  dialogColor: any;
  reminder: any;
  noteIdList: any;
  noteLabelIndex: any;
  collaboratorsArray: any = [];
  noteLabelsArray: any = [];


  noteUpdateMessage = 'Note updated';
  component = 'dialog-card';
  @Output() messageEvent = new EventEmitter<string>();
  @Output() reminderEvent = new EventEmitter<string>();


  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DisplayComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData, private noteService: NoteService) {
    this.noteObj = {
      noteId: dialogData.card,
      
      title: dialogData.title,
      description: dialogData.description,
      color: dialogData.color,



      component2: dialogData.component1,
    };
    this.noteIdList=dialogData.card,
    this.reminder = dialogData.reminder,
      this.collaboratorsArray = dialogData.collaborators,
      this.noteLabelsArray = dialogData.noteLabels,
      console.log(this.noteLabelsArray);
    this.dialogColor = this.noteObj.color;

  }

  ngOnInit() {
    //reminder
    this.dataService.reminderCurrentMessage.subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.reminder = res;
        console.log('showwww in if', this.reminder)
      }
    });

    //collabs
    // this.dataService.collabCurrentMessage.subscribe((res: any) => {
    //   console.log(res);
    //   if (res) {
    //     let collabData = {
    //       collaborators: res
    //     }
    //     console.log('showwww in if', this.collaboratorsArray)
    //     this.collaboratorsArray.push(collabData);}
    // });


    //labels
    this.dataService.labelCurrentMessage.subscribe((res: any) => {
      console.log(res);
      if (res=='') {
        let labelData = {
          label: res
        }
        // for(var i=0;i<this.noteLabelsArray.length;i++){
        //   if(this.noteLabelsArray[i]==labelData){
        //     console.log('no');
        //   }
        //   else
          this.noteLabelsArray.push(labelData);
          
        
        
        console.log('showwww in if', this.noteLabelsArray)
      }
    });

    //trash
    this.dataService.trashCurrentMessage.subscribe((res: any) => {
      if (res != 'save'){
        this.dialogRef.close();
        res='save';
      }
        else
        console.log(res);
    });

    //archive
    this.dataService.archiveCurrentMessage.subscribe((res: any) => {
      if (res != ''){
        this.dialogRef.close(res);
        res='';}
        else
        console.log(res);
    });

    //unarchive
    this.dataService.unarchiveCurrentMessage.subscribe((res: any) => {
      if (res != ''){
        this.dialogRef.close(res);
        res='';}
        else
        console.log(res);
    });

    //delforever
    this.dataService.delForeverCurrentMessage.subscribe((res: any) => {
      if (res != ''){
        this.dialogRef.close();
        res='';
      }
        else
        console.log(res);
    });

    //restore
    this.dataService.restoreCurrentMessage.subscribe((res: any) => {
      if (res != ''){
        this.dialogRef.close();
        res='';
      }
        else
        console.log(res);
    });
  }



  onUpdateNote() {
    this.noteObj1 = {
      'noteId': this.noteObj.noteId,
      'title': this.title.value,
      'description': this.description.value,
    };


    if ((this.noteObj1.title == null) && (this.noteObj.title != null)) {
      this.noteObj1.title = this.noteObj.title;
    }
    if ((this.noteObj1.description == null) && (this.noteObj.description != null)) {
      this.noteObj1.description = this.noteObj.description;
    }

    if ((this.noteObj1.title == '') && (this.noteObj1.description == '')) {
      this.noteObj1.title = 'Empty Note';
      this.noteObj1.description = 'Empty Note';
    }
    this.dialogRef.close(this.noteObj1);

    this.noteService.updateNotes(this.noteObj1).subscribe((response) => {

      console.log(response);
      this.messageEvent.emit(this.message);
      //this.dataService.changeMessage(this.noteUpdateMessage);
    }, (error) => {
      console.log(error);
    });
  }

  receiveMessage($event) {
    this.message = $event;
    this.dialogColor = $event;
  }

  onClearReminder() {
    const obj = {
      'noteIdList': [this.noteObj.noteId],
      'reminder': [this.reminder]
    };
    console.log('dfdrevfgerve', obj);
    this.noteService.removeReminderToNote(obj).subscribe((response: any) => {
      console.log(response);
      this.reminder='';
    }, (error) => {
      console.log(error);
    }); 
  }

  onClearLabel(labelId,labelName) {
    console.log('fdvdzs', labelId);
    const obj = {
      'noteId': this.noteObj.noteId,
      'labelId': labelId
    };
    console.log('dsfcsdc',obj);
    this.noteService.removeLabelToNote(obj).subscribe((response: any) => {
      console.log(response);
     //removing label name from dialog box
     this.noteLabelIndex = this.noteLabelsArray.findIndex(i => i.label === labelName);
    console.log("index....", this.noteLabelsArray.findIndex(i => i.label === labelName));
    
    this.noteLabelsArray.splice(this.noteLabelIndex, 1);
    }, (error) => {
      console.log(error);
    });

  }
}