import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notes: any;
  noteObj: any;
  messageDelFor = 'Deleted Forever';
  messageTrash = 'Note Trash';
  options: any;
  component='trash';
  @Output() messageEvent = new EventEmitter<string>();
  @Input() card: any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getTrashNotes();
  }

  getTrashNotes() {
    console.log('inside trash notes');

    this.noteService.trashNotesList().subscribe((response: any) => {
      this.notes = response.data.data.reverse();
      console.log(response);

    }, (error) => {
      console.log(error.statusText);
    });
  }

  receiveMessage($event) {
    console.log($event);
    this.getTrashNotes();
  }
}
