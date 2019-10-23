import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  component="reminder"
  notes: any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getReminderNotes();
  }

  getReminderNotes() {
    return this.noteService.reminderNotesList().subscribe((response: any) => {
      this.notes = response.data.data.reverse();
      console.log(response);
    }, (error) => {
      console.log(error.statusText);
    });
  }

  receiveMessage($event) {
    console.log($event);
    this.getReminderNotes();
  }

}
