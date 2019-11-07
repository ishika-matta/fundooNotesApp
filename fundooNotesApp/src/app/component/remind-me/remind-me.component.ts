import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-remind-me',
  templateUrl: './remind-me.component.html',
  styleUrls: ['./remind-me.component.scss']
})
export class RemindMeComponent implements OnInit {
  @Input() card: any;
  @Output() reminderEvent = new EventEmitter();
  @Output() messageEvent = new EventEmitter();
  message: any = 'Reminder';
  date: any;

  public selectedMoment = new Date();

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  onSave(card, picker) {
    this.date=picker._validSelected;
    if(card){  
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
  else{
    console.log('without note id date emit', this.date)
      this.messageEvent.emit(this.date);
  }
  }

  getDateResponse() {
    return this.noteService.reminderNotesList().subscribe((response: any) => {
      this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error.statusText);
    });
  }
}




