import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
import { FormControl } from '@angular/forms';
import { TakeNote } from 'src/app/models/take-note.model';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  takeNoteObj: TakeNote = new TakeNote();
  message = 'Fundoo';
  title = new FormControl();
  description = new FormControl();
  show = true;
  component = 'take-note';
  til: any;
  des: any;

  @Output() messageEvent = new EventEmitter<string>();





  constructor(private noteService: NoteService, private data: DataService) { }

  ngOnInit() {

  }
  toggle() {
    this.show = !this.show;
  }

  postNotes() {
    this.takeNoteObj = {
      title: this.title.value,
      description: this.description.value
    };
    console.log(this.takeNoteObj);

      this.noteService.addNotes(this.takeNoteObj).subscribe((response: any) => {
        console.log(response);
        this.til = '';
        this.des = '';
        this.toggle();
        this.messageEvent.emit(this.message);
       // this.data.changeMessage('saved');

      }, (error) => {
        console.log(error);
      });
  }

  receiveMessage($event) {
    this.message = $event;
  }
}
