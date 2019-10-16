import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.scss']
})
export class ChangeColorComponent implements OnInit {

  messageColor = 'Get colored notes';
  noteObj: any;
  @Input() card: any;

  @Output() messageEvent = new EventEmitter<string>()

  colorArray: any = [
    { color: '#ECEEEE' }, { color: '#F28B82' }, { color: '#F7BC04' }, { color: '#FAF474' },
    { color: '#CBFF90' }, { color: '#AAFEEB' }, { color: '#CBF0F8' }, { color: '#ADCBFA' },
    { color: '#D7AEFB' }, { color: '#FDCFE8' }, { color: '#E6C9A8' }, { color: '#FFFFFF' }];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
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
        this.messageEvent.emit(this.messageColor);


      }, (error) => {
        console.log(error);
      });

    } catch (err) {
      return err;
    }

  }

}
