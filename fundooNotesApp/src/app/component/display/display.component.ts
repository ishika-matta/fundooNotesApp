import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';
import { TakeNote } from 'src/app/models/take-note.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  notes: any;
  note: any = new TakeNote();
  message: any;
  noteObj: any;
  options: any;



  constructor(private noteService: NoteService, public dialog: MatDialog, private data: DataService) { }

  ngOnInit() {
    this.receiveNotes();
    this.data.currentMessage.subscribe((res) => {
      this.receiveNotes();
    });
    

  }

  receiveNotes() {
    const options = {
          purpose: 'getNotesList',
        };
      this.noteService.getWithToken(options).subscribe((response: any) => {
            this.notes = response.data.data.reverse();
            console.log(response);
          }, (error) => {
            console.log(error.statusText);
          });

  }




  receiveMessage($event) {

    this.message = $event;



    this.noteObj = {
      'isDeleted': false,
      'noteIdList': [this.message]
      };
    this.options = {
      data: this.noteObj,
      purpose: 'trashNotes',

    };
    this.noteService.postWithTokenNotEncoded(this.options).subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });


  }


  openDialog(notes): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: notes.title,
      description: notes.description
    };

    const dialogRef = this.dialog.open(DialogCardComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => console.log('Dialog output:', result)
    );

  }
}
