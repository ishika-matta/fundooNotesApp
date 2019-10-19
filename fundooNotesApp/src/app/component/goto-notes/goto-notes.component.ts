import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
import { TakeNote } from 'src/app/models/take-note.model';


@Component({
  selector: 'app-goto-notes',
  templateUrl: './goto-notes.component.html',
  styleUrls: ['./goto-notes.component.scss']
})
export class GotoNotesComponent implements OnInit {
  notes: any;

  note: any = new TakeNote();
  message: any;
  noteObj: any;
  options: any;
  hover: false;
  flag: any = 'true';
  result1: any;
  component='display';
 

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
    // this.data.currentMessage.subscribe((res) => {
    //   this.getNotes();
    // });


  }

  getNotes() {

      this.noteService.allNotesList().subscribe((response: any) => {
        this.result1 = this.getFilter(response.data.data);
            this.notes = this.result1.reverse();
            console.log("notes",this.result1);
          }, (error) => {
            console.log(error.statusText);
          });

  }

  getFilter(result) {
    const pass = result.filter(function(result) {
      return (result.isDeleted == false && result.isArchived == false);
    });
    return pass;
  }


  receiveMessage($event) {
    console.log('fdvgbdvgbdbvdf', $event);

    this.getNotes();
  }


}
