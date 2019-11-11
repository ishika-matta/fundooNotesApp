import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-archive-un',
  templateUrl: './archive-un.component.html',
  styleUrls: ['./archive-un.component.scss']
})
export class ArchiveUnComponent implements OnInit {
  noteObj: any;
  options: any;
  message: string;
  @Input() card: any;
  @Input() archive: any;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private noteService: NoteService, private snackBar: MatSnackBar,
    private dataService: DataService) { }

  ngOnInit() {
  }

  onArchive(card) {
    if(card){
    this.noteObj = {
      'isArchived': true,
      'noteIdList': [card]
      };

    this.noteService.archiveNotes(this.noteObj).subscribe((response: any) => {
       console.log(response);
       this.openSnackBar('Note archived', 'Dismiss');
        this.messageEvent.emit(this.message);
        this.dataService.trashMessage(this.message);
    }, (error) => {
      console.log(error);
    });
  }
  else{
      console.log('not card');
      this.dataService.changeMessage(true);
      this.openSnackBar('Note archived', 'Dismiss');
  }
}
  openSnackBar(msg, action) {
    this.snackBar.open(msg, action, {
      duration: 2000});
  }
}
