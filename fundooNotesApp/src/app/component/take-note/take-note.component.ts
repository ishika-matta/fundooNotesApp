import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { FormControl } from '@angular/forms';
import { TakeNote } from 'src/app/models/take-note.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  takeNoteObj:TakeNote=new TakeNote();
  message:string;
  title=new FormControl();
  description=new FormControl();
  show: boolean = true;


  

  constructor(private noteService: NoteService,private data:DataService) { }

  ngOnInit() {
   
  }
  toggle() { 
    this.show= !this.show;
  }
  // receiveMessage($event){
  //   console.log("27......");
  //   this.message=$event;
  //   this.takeNoteObj={
  //     title:this.title.value,
  //     description:this.description.value,
  //   }
  //   let options = {
  //     data: this.takeNoteObj,
  //     purpose: 'addNotes',
  //   }
  //   console.log(this.takeNoteObj);

  //   this.noteService.postWithTokenWithEncoded(options).subscribe((response) => {
  //     console.log(response);
  //   },(error)=>{
  //     console.log(error.statusText);
  //   })

  // }
  receiveNotes()
  {
    this.takeNoteObj={
      title:this.title.value,
      description:this.description.value
    }
    console.log(this.takeNoteObj);
    let  options={
        data:this.takeNoteObj,
        purpose:'addNotes'
      }
      this.noteService.postWithTokenWithEncoded(options).subscribe((response:any)=>{
        console.log(response);
        this.toggle();
        this.data.changeMessage("saved");
      },(error)=>{
        console.log(error);
      }); 

  }

}
