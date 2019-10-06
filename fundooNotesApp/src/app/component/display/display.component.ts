import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';
import { TakeNote } from 'src/app/models/take-note.model';
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  notes:any;
  note:any=new TakeNote();

  
  constructor(private noteService: NoteService, public dialog: MatDialog) { }

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

      openDialog(notes):void {

        const dialogConfig = new MatDialogConfig();
    
        dialogConfig.autoFocus = true;  
        dialogConfig.data={
          title:notes.title,
          description:notes.description
        }
      
      const dialogRef = this.dialog.open(DialogCardComponent, dialogConfig);
    
      dialogRef.afterClosed().subscribe(
        result => console.log("Dialog output:", result)
    ); 

      }
}
