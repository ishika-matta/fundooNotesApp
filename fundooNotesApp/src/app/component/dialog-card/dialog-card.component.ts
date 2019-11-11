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
  dialogColor:any;
  reminder:any;
  

  noteUpdateMessage = 'Note updated';
  component = 'dialog-card';
  @Output() messageEvent = new EventEmitter<string>();
  @Output() reminderEvent = new EventEmitter<string>();
 

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DisplayComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData , private noteService: NoteService) {
    this.noteObj = {
      noteId: dialogData.card,
      noteIdList: dialogData.card,
      title: dialogData.title,
      description: dialogData.description,
      color: dialogData.color,
      reminder: dialogData.reminder,
      component2:dialogData.component1,
    };
    this.dialogColor=this.noteObj.color;
  }

  ngOnInit() {
    //reminder
    // this.dataService.viewCheckMessage.subscribe((res: any) => {
    //   console.log(res);
    //   if (res) {
    //     this.reminder = res;
    //     console.log('showwww in if', this.reminder)
    //   }
    //   else
    //     console.log('showwww in else', this.reminder)
    // });
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
    this.dialogColor=$event;
  }

  receiveReminderMessage($event) {
    this.reminder = $event;
    console.log('event received in take note', this.reminder);
    // this.reminderEvent.emit(this.reminder);
  }

  

  onClearReminder() {
    this.reminder = '';
  }
}




