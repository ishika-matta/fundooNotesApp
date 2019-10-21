import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';
import { TakeNote } from 'src/app/models/take-note.model';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/dataServices/data.service';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note: any= new TakeNote();



  message: any;
  noteObj: any;
  options: any;
  hover: false;
  flag: any = 'true';
  result1: any;
  noteLabel:any;



  @Input() notes: any;
  @Input() component: any;

  @Output() messageEvent = new EventEmitter<string>();



  constructor(public dialog: MatDialog, private dataService: DataService, private noteService: NoteService) { }

  ngOnInit() {
  
    this.dataService.currentMessage.subscribe((message) => {
      this.message = message
    });
  }



  openDialog(note): void {

    const dialogRef = this.dialog.open(DialogCardComponent,
      {
        data:
        {
          card: note.id,
          title: note.title,
          description: note.description,
          color: note.color
        }
      });
    dialogRef.afterClosed().subscribe(
      result => {
        console.log('Dialog output:', result);
        this.messageEvent.emit(this.message);
      })
  }

  receiveMessage($event) {
    this.message = $event;
    this.messageEvent.emit(this.message);
  }

  onChipClick(labelId,noteId){
    let obj = {
      'noteId': noteId,
      'labelId': labelId
    };
      this.noteService.removeLabelToNote(obj).subscribe((response: any) => {
        console.log(response);
        this.messageEvent.emit(this.message);
        
      
      }, (error) => {
        console.log(error);
      });
  }
}
