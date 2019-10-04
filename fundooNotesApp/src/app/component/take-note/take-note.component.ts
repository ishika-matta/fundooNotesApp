import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { FormControl } from '@angular/forms';
import { TakeNote } from 'src/app/models/take-note.model';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  takeNoteObj:TakeNote=new TakeNote();
  title=new FormControl();
  description=new FormControl();


  

  constructor(private noteService: NoteService) { }

  ngOnInit() {
   
  }
  
  getMessage($event){
    this.takeNoteObj={
      title:this.title.value,
      description:this.description.value,
    }
    let options = {
      data: this.takeNoteObj,
      purpose: 'addNotes',
    }

    this.noteService.postWithToken(options).subscribe((response) => {
      console.log(response);
    },(error)=>{
      console.log(error.statusText);
    })




  }

}
