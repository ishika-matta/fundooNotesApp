import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-remind-me',
  templateUrl: './remind-me.component.html',
  styleUrls: ['./remind-me.component.scss']
})
export class RemindMeComponent implements OnInit {
  @Input() card: any;
  @Output() messageEvent = new EventEmitter<string>();
  message: string = 'Reminder';
  date: Date;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  onSave(card, picker) {
    this.date=picker._validSelected;
    let remindMeObj = {
      'noteIdList': [card],
      'reminder': this.date
    };

    this.noteService.addUpdateReminderNotes(remindMeObj).subscribe((response: any) => {
      this.messageEvent.emit(this.message);
      this.getDateResponse();
    }, (error) => {
      console.log(error);
    });
  }

  getDateResponse() {
    return this.noteService.reminderNotesList().subscribe((response: any) => {
      this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error.statusText);
    });
  }
}




