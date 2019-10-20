import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-archive-un',
  templateUrl: './archive-un.component.html',
  styleUrls: ['./archive-un.component.scss']
})
export class ArchiveUnComponent implements OnInit {
  noteObj:any;
  options:any;
  message:string;
  @Input() card: any;
  @Input() archive: any;

  @Output() messageEvent = new EventEmitter<string>()

  constructor(private noteService: NoteService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onArchive(card) {
    this.noteObj = {
      'isArchived': true,
      'noteIdList': [card]
      };

    this.noteService.archiveNotes(this.noteObj).subscribe((response: any) => {
       console.log(response);
       this.openSnackBar('Note archived', 'Dismiss');
        this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error);
    });
  }

  openSnackBar(msg,action){
    this.snackBar.open(msg,action);
  }

}
