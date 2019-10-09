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
  hover: false;
  result1: any;



  constructor(private noteService: NoteService, public dialog: MatDialog, private data: DataService) { }

  ngOnInit() {
    this.getNotes();
    this.data.currentMessage.subscribe((res) => {
      this.getNotes();
    });


  }

  getNotes() {
    const options = {
          purpose: 'getNotesList',
        };
      this.noteService.getWithToken(options).subscribe((response: any) => {
        this.result1 = this.getFilter(response.data.data);

            this.notes = this.result1.reverse();
            console.log(response);
          }, (error) => {
            console.log(error.statusText);
          });

  }

  getFilter(result) {
    const pass = result.filter(function(result) {
      return (result.isDeleted == false && result.isArchived == false);
    });
    return pass;
  }


  receiveMessage($event) {
    this.getNotes();
  }



  openDialog(notes): void {

    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = {
    //   title: notes.title,
    //   description: notes.description
    // };

    const dialogRef = this.dialog.open(DialogCardComponent,
      {data:
      {
        title: notes.title,
      description: notes.description
      }
      });
    dialogRef.afterClosed().subscribe(
      result => console.log('Dialog output:', result)
    );

  }
}
