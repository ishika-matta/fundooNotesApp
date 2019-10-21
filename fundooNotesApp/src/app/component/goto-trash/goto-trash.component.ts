import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';


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
}
