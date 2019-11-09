import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-tray',
  templateUrl: './icon-tray.component.html',
  styleUrls: ['./icon-tray.component.scss']
})
export class IconTrayComponent implements OnInit {
  message: any;
  @Output() messageEvent = new EventEmitter<string>();
  @Output() reminderEvent = new EventEmitter<string>();
  @Output() labelEvent = new EventEmitter<string>();
  @Input() card: any;
  @Input() component: any;
  @Input() isDeleted: any;


  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event;
    this.messageEvent.emit(this.message);
  }

  receiveReminderMessage($event) {
    this.reminderEvent.emit($event);
    console.log($event)
  }

  receiveLabelMessage($event) {
    this.labelEvent.emit($event);
    console.log($event)
  }
}
