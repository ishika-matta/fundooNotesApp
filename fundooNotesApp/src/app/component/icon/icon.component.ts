import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';
import { NoteService } from '../../services/note.service';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  message = 'Saved';
  messageDel = 'Trash';
  messageDelFor = 'Deleted Forever';
  messageGetNotes='Get notes';
  notes: any;
  noteObj: any;
  options:any;
  @Output() messageEvent = new EventEmitter<string>();
  @Input() card: any;

  colorArray: any = [
    { color: '#ECEEEE' }, { color: '#F28B82' }, { color: '#F7BC04' }, { color: '#FAF474' },
    { color: '#CBFF90' }, { color: '#AAFEEB' }, { color: '#CBF0F8' }, { color: '#ADCBFA' },
    { color: '#D7AEFB' }, { color: '#FDCFE8' }, { color: '#E6C9A8' }, { color: '#FFFFFF' }];



  constructor(private noteService: NoteService) {

  }

  ngOnInit() {

  }


  // onSave() {
  //   this.messageEvent.emit(this.message);
  //   console.log(this.message);
  // }
  // onTrash(card) {
  //   console.log()
  //   try {
  //     this.noteObj = {
  //       'isDeleted': false,
  //       'noteIdList': [card],
  //     };
  //     const options = {
  //       data: this.noteObj,
  //       purpose: 'trashNotes',

  //     };
  //     this.noteService.postWithTokenNotEncoded(options).subscribe((response: any) => {
  //       console.log(response);
  //       //delete notes
  //       this.messageEvent.emit(this.messageDel);


  //     }, (error) => {
  //       console.log(error);
  //     });

  //   } catch (err) {
  //     return err;
  //   }
  // }

  
  onDeleteForever(card) {

    this.noteObj = {
      'isDeleted': false,
      'noteIdList': [card]
      };
    this.options = {
      data: this.noteObj,
      purpose: 'deleteForeverNotes',

    };
    this.noteService.postWithTokenNotEncoded(this.options).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.messageDelFor);
    }, (error) => {
      console.log(error);
    });

  }
    

  onDelete() {
    console.log(this.card);
    this.messageEvent.emit(this.card);
    console.log(this.messageDelFor);
  }


  changeColor(colors, card) {
    try {
      this.noteObj = {
        'noteIdList': [card],
        'color': colors,
      };
      const options = {
        data: this.noteObj,
        purpose: 'changesColorNotes',

      };
      this.noteService.postWithTokenNotEncoded(options).subscribe((response: any) => {
        console.log(response);
        //get notes
        this.messageEvent.emit(this.messageGetNotes);


      }, (error) => {
        console.log(error);
      });

    } catch (err) {
      return err;
    }

  }
}
