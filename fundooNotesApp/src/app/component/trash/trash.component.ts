import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notes: any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  getTrashNotes() {
    console.log("inside trash notes");
    const options = {
          purpose: 'getTrashNotesList',
        };
      this.noteService.getWithToken(options).subscribe((response: any) => {
            this.notes = response.data.data.reverse();
            console.log(response);
          }, (error) => {
            console.log(error.statusText);
          });

  }

}
