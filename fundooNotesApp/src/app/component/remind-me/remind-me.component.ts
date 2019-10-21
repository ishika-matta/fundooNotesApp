import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-remind-me',
  templateUrl: './remind-me.component.html',
  styleUrls: ['./remind-me.component.scss']
})
export class RemindMeComponent implements OnInit {
  @Input() card: any;
  @Input() reminder: any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  onRemind(card,reminderValue){
    let remindMeObj = {
      'noteIdList': [card],
      'reminder':reminderValue
     
    };


      this.noteService.addUpdateReminderNotes(remindMeObj).subscribe((response: any) => {
        console.log('inside remind me',response);
      }, (error) => {
        console.log(error);
      });

    

  }



}
