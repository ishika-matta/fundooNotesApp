import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { FormControl } from '@angular/forms';
import { TakeNote } from 'src/app/models/take-note.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  takeNoteObj: TakeNote = new TakeNote();
  message: string="Fundoo";
  title= new FormControl();
  description= new FormControl();
  show = true;
  component='take-note';

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
    const  options = {
        data: this.takeNoteObj,
        purpose: 'addNotes'
      };

      this.noteService.postWithTokenWithEncoded(options).subscribe((response: any) => {
        console.log(response);
        this.toggle();
        this.messageEvent.emit(this.message);
       // this.data.changeMessage('saved');
        
      }, (error) => {
        console.log(error);
      });

  }

  receiveMessage($event) {
    this.message = $event
  }

}
