import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  notes:any;
  
  constructor(private noteService: NoteService) { }

  ngOnInit() {

      let options = {
        purpose: 'getNotesList',
      }
      this.noteService.getWithToken(options).subscribe((response:any) => {
        this.notes=response.data.data;
        console.log(response);
      },(error)=>{
        console.log(error.statusText);
      })
      }




}
