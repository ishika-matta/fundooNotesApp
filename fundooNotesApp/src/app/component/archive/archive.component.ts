import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes: any;
  noteObj: any;
  options: any;
  result1: any;
  messageTrash = 'Note Trash';
  messageUnArchive = 'Note Unarchive';
  flag = 'false';
  component='archive';
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getArchiveNotes();

  }

  receiveMessage($event) {
    console.log($event);
    this.getArchiveNotes();
  }

  getArchiveNotes() {
    console.log('inside archive notes');
      this.noteService.archiveNotesList().subscribe((response: any) => {
        this.result1 = this.getFilter(response.data.data);

            this.notes = this.result1.reverse();

            console.log(response);
          }, (error) => {
            console.log(error.statusText);
          });

  }

  getFilter(result) {
    const pass = result.filter(function(result) {
      return (result.isDeleted == false);
    });
    return pass;
  }
}
