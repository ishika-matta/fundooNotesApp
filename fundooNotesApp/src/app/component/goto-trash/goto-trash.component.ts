import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';


@Component({
  selector: 'app-goto-trash',
  templateUrl: './goto-trash.component.html',
  styleUrls: ['./goto-trash.component.scss']
})
export class GotoTrashComponent implements OnInit {
  notes: any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }
  getTrashNotes() {
    console.log('inside trash notes');
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
