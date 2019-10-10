import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayComponent } from '../display/display.component';
import { Inject } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { DataService } from '../../services/data.service';
import { TakeNote } from 'src/app/models/take-note.model';
import { FormControl } from '@angular/forms';

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

  noteUpdateMessage = 'Note updated';
  @Output() noteMessageEvent = new EventEmitter<string>();




  constructor(
    public dialogRef: MatDialogRef<DisplayComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData , private noteService: NoteService,
    private dataService: DataService) {
    this.noteObj = {
      noteId: dialogData.card,
      title: dialogData.title,
      description: dialogData.description
    };
  }

  ngOnInit() {
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
      // this.noteObj1.description = "both are empty";
      }
    this.dialogRef.close(this.noteObj1);
    this.options = {
      data: this.noteObj1,
      purpose: 'updateNotes'
    };


    this.noteService.postWithTokenWithEncoded(this.options).subscribe((response) => {
      console.log('inside dailog box....47');
      console.log(response);
      this.dataService.changeMessage(this.noteUpdateMessage);
    }, (error) => {
      console.log(error);
    });
  }
}




