import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.scss']
})
export class ChangeColorComponent implements OnInit {

  messageColor = 'Get colored notes';
  noteObj: any;
  @Input() card: any;

  @Output() messageEvent = new EventEmitter<string>();

  colorArray: any = [
    { color: '#ECEEEE' }, { color: '#F28B82' }, { color: '#F7BC04' }, { color: '#FAF474' },
    { color: '#CBFF90' }, { color: '#AAFEEB' }, { color: '#CBF0F8' }, { color: '#ADCBFA' },
    { color: '#D7AEFB' }, { color: '#FDCFE8' }, { color: '#E6C9A8' }, { color: '#FFFFFF' }];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }
  

  changeColor(colors, card) {
    try {
      if(card){
      this.noteObj = {
        'noteIdList': [card],
        'color': colors,
      };
      this.noteService.changeColorNotes(this.noteObj).subscribe((response: any) => {
        console.log(response);
        //get notes
        this.messageEvent.emit(colors);
      }, (error) => {
        console.log(error);
      });
    }
    else{
      console.log('without note id color emit', colors)
      this.messageEvent.emit(colors);
    }
    } catch (err) {
      return err;
    }
  }
}
