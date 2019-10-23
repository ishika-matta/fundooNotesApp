import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
import { NoteLabelService } from 'src/app/services/noteLabelServices/note-label.service';
import { DataService } from 'src/app/services/dataServices/data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-more-menu',
  templateUrl: './more-menu.component.html',
  styleUrls: ['./more-menu.component.scss']
})
export class MoreMenuComponent implements OnInit {
  @Input() component: any;
  notes: any;
  noteObj: any;
  messageDelFor = 'Deleted Forever';
  messageTrash = 'Note Trash';
  messageLabels = 'Note labels';
  options: any;
  labels: any;
  message: any;
  durationInSeconds = 5;

  @Output() messageEvent = new EventEmitter<string>();
  @Input() card: any;

  constructor(private noteService: NoteService, private noteLabelService: NoteLabelService,
    private dataService: DataService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    this. getAllLabels();
  }


  onDeleteForever(card) {
    console.log('id', card);

    this.noteObj = {
      'isDeleted': true,
      'noteIdList': [card]
    };

    this.noteService.deleteForeverNotes(this.noteObj).subscribe((response: any) => {
      console.log(response);
      this.openSnackBar('Note deleted permanently', 'Dismiss');
      this.messageEvent.emit(this.messageDelFor);

    }, (error) => {
      console.log(error);
    });

  }

  onRestore(card) {
    this.noteObj = {
      'isDeleted': false,
      'noteIdList': [card]
    };

    this.noteService.trashNotes(this.noteObj).subscribe((response: any) => {
      console.log(response);
      this.openSnackBar('Note restored', 'Dismiss');
      this.messageEvent.emit(this.messageTrash);

    }, (error) => {
      console.log(error);
    });
  }

  onTrash(card) {
    this.noteObj = {
      'isDeleted': true,
      'noteIdList': [card]
      };

    this.noteService.trashNotes(this.noteObj).subscribe((response: any) => {
       console.log(response);
       //snackbar implementation
       this.openSnackBar('Note deleted', 'Dismiss');
        this.messageEvent.emit(this.messageTrash);
    }, (error) => {
      console.log(error);
    });
  }

  onOpenAddLabel(labelid) {
    console.log('note', this.card);
    this.noteObj = {
      labelId: labelid,
      noteId: this.card
    };
     this.noteService.addLabelToNotes(this.noteObj).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.messageLabels);
    }, (error) => {
      console.log(error);
    });
  }


  getAllLabels() {
    this.noteLabelService.getNoteLabels().subscribe((response: any) => {
      console.log(response);
      this.labels = response.data.details.reverse();
      // this.dataService.changeMessage("fundoo")
    }, (error) => {
      console.log(error);
    });
  }

  openSnackBar(msg, action) {
    this.snackBar.open(msg, action);
  }

}
