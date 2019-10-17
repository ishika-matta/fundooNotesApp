import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
@Component({
  selector: 'app-more-menu',
  templateUrl: './more-menu.component.html',
  styleUrls: ['./more-menu.component.scss']
})
export class MoreMenuComponent implements OnInit {
  @Input() component:any;
  notes: any;
  noteObj: any;
  messageDelFor = 'Deleted Forever';
  messageTrash = 'Note Trash';
  options: any;

  @Output() messageEvent = new EventEmitter<string>();
  @Input() card: any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }


  onDeleteForever(card) {
    console.log('id', card);

    this.noteObj = {
      'isDeleted': true,
      'noteIdList': [card]
    };

    this.noteService.deleteForeverNotes(this.noteObj).subscribe((response: any) => {
      console.log(response);
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
        this.messageEvent.emit(this.messageTrash);
    }, (error) => {
      console.log(error);
    });
  }

}
