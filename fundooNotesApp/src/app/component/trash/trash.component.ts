import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notes: any;
  noteObj: any;
  messageDelFor:string = 'Deleted Forever';
  messageTrash:string = 'Note Trash';
  options:any;
  @Output() messageEvent = new EventEmitter<string>();
  @Input() card: any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getTrashNotes();
  }

  getTrashNotes() {
    console.log('inside trash notes');
    const options = {
          purpose: 'getTrashNotesList',
        };
      this.noteService.getWithToken(options).subscribe((response: any) => {
            this.notes = response.data.data.reverse();
            console.log(response);
            
          }, (error) => {
            console.log(error.statusText);
          });

  }

  getNotes() {
    const options = {
          purpose: 'getNotesList',
        };
      this.noteService.getWithToken(options).subscribe((response: any) => {

            this.notes = response.data.data.reverse();
            console.log(response);
          }, (error) => {
            console.log(error.statusText);
          });

  }

 


  receiveMessage($event) {
    console.log($event);

    this.getNotes();
  }

  onDeleteForever(card) {
console.log("id",card);

    this.noteObj = {
      'isDeleted': true,
      'noteIdList': [card]
      };
    let options = {
      data: this.noteObj, 
      purpose: 'deleteForeverNotes',

    };
    this.noteService.postWithTokenNotEncoded(options).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.messageDelFor);
  this.getTrashNotes();
    }, (error) => {
      console.log(error);
    });

  }

  onRestore(card){
    this.noteObj = {
      'isDeleted': false,
      'noteIdList': [card]
      };

      this.options = {
        data: this.noteObj,
        purpose: 'trashNotes',
  
      };
  
      this.noteService.postWithTokenNotEncoded(this.options).subscribe((response: any) => {
         console.log(response);
          this.messageEvent.emit(this.messageTrash);
          this.getTrashNotes();
      }, (error) => {
        console.log(error);
      });


  }

}
