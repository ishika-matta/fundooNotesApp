import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';
import { TakeNote } from 'src/app/models/take-note.model';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/dataServices/data.service';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note: any = new TakeNote();
  message: any;
  noteObj: any;
  options: any;
  hover: false;
  flag: any = 'true';
  result1: any;
  noteLabel: any;
  view: any;
  ques: any;
  showCheckbox: any;
  cardParticularId: any;
  appCheckListItem: any;
  item: any;
  @Input() notes: any;
  @Input() component: any;
  @Output() messageEvent = new EventEmitter<string>();
  checkListItem = new FormControl();
  checked = false;



  constructor(public dialog: MatDialog, private dataService: DataService, private noteService: NoteService) { }

  ngOnInit() {

    this.dataService.currentMessage.subscribe((message) => {
      this.message = message;
    });

    this.dataService.viewMessage.subscribe((res) => {
      this.view = res;
    })

    this.dataService.quesMessage.subscribe((res) => {
      this.ques = res;
    })

    this.dataService.viewCheckMessage.subscribe((res: any) => {
      this.cardParticularId = res.noteIdList;
      console.log(this.cardParticularId)
      if (res.show == true) {
        this.showCheckbox = res.show;
      }
    })
  }


  openDialog(note): void {
    const dialogRef = this.dialog.open(DialogCardComponent,
      {
        data:
        {
          card: note.id,
          title: note.title,
          description: note.description,
          color: note.color,
          reminder: note.reminder,
          collaborators: note.collaborators,
          noteLabels: note.noteLabels,
          component1: this.component,
        }
      });
      this.dataService.trashMessage('save');
    dialogRef.afterClosed().subscribe(
      result => {
        console.log('Dialog output:', result);
        this.messageEvent.emit(this.message);
      });
  }

  receiveMessage($event) {
    this.message = $event;
    this.messageEvent.emit(this.message);
  }

  onChipClick(labelId, noteId) {
    const obj = {
      'noteId': noteId,
      'labelId': labelId
    };
    this.noteService.removeLabelToNote(obj).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error);
    });
  }

  onReminderClick(reminderId, noteId) {
    const obj = {
      'noteIdList': [noteId],
      'reminder': reminderId
    };
    this.noteService.removeReminderToNote(obj).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error);
    });
  }

  onAddCheckList(noteId) {
    const obj = {
      'itemName': this.checkListItem.value,
      'status': 'open'
    };
    this.noteService.addCheckList(obj, noteId).subscribe((response: any) => {
      console.log(response);
      this.item = '';
      this.showCheckbox = true;
      this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error);
    });
  }

  onRemoveCheckList(noteId, checkListId) {
    const obj = {
      'noteId': noteId,
      'checkListId': checkListId
    };
    this.noteService.removeCheckList(obj).subscribe((response: any) => {
      console.log(response);
      this.item = '';
      this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error);
    });
  }

  onUpdateCheckList(noteId, checkListId, status, itemName) {
    if (status == 'open') {
      const obj = {
        'noteId': noteId,
        'checkListId': checkListId,
        'itemName': itemName,
        'status': 'close'
      };
      this.noteService.updateCheckList(obj).subscribe((response: any) => {
        console.log(response);
        this.item = '';
        this.messageEvent.emit(this.message);
      }, (error) => {
        console.log(error);
      });
    }

    if (status == 'close') {
      const obj = {
        'noteId': noteId,
        'checkListId': checkListId,
        'itemName': itemName,
        'status': 'open'
      };
      this.noteService.updateCheckList(obj).subscribe((response: any) => {
        console.log(response);
        this.item = '';
        this.messageEvent.emit(this.message);
      }, (error) => {
        console.log(error);
      });
    }
  }
}