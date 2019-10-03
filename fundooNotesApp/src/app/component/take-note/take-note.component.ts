import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  //message: string = "Hola Mundo!"

  // @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  // sendMessage() {
  //   this.messageEvent.emit(this.message)
  // }

}
