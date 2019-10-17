import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-tray',
  templateUrl: './icon-tray.component.html',
  styleUrls: ['./icon-tray.component.scss']
})
export class IconTrayComponent implements OnInit {
  message:string;
  @Output() messageEvent = new EventEmitter<string>();
  @Input() card: any;
  @Input() component:any;
  @Input() isDeleted:any;
  

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event;
    this.messageEvent.emit(this.message);
  }

}
