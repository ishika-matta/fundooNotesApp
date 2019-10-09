import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes: any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getArchiveNotes();

  }

  getArchiveNotes() {
    console.log('inside archive notes');
    const options = {
          purpose: 'getArchiveNotesList',
        };
      this.noteService.getWithToken(options).subscribe((response: any) => {
            this.notes = response.data.data.reverse();
            console.log(response);
          }, (error) => {
            console.log(error.statusText);
          });

  }
}
