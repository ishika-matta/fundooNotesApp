import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DisplayComponent } from '../display/display.component';
import { Inject } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { TakeNote } from 'src/app/models/take-note.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss']
})
export class DialogCardComponent implements OnInit {
  options:any;
  noteObj:any=new TakeNote();
  title:any=new FormControl();
  description:any=new FormControl();
  
 

  constructor(
    public dialogRef: MatDialogRef<DisplayComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData, private noteService:NoteService) { 
      this.noteObj={
        title:dialogData.title,
        description:dialogData.description}
    }

  ngOnInit() {
  }
  
  onSave() {
    this.noteObj={
      title:this.title.value,
      description:this.description.value
    }
    this.dialogRef.close(this.noteObj);
    this.options={
      data:this.noteObj,
      purpose:'updateNotes'
    }


this.noteService.postWithTokenWithEncoded(this.options).subscribe((response)=>{
  console.log(response);
},(error)=>{
  console.log(error);
});
  }
}




