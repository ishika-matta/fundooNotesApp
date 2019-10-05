import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  message:string="Saved";
  @Output() messageEvent=new EventEmitter<string>();
  

  constructor() { }

  ngOnInit() {
  }


  onSave() {
    this.messageEvent.emit(this.message);
    console.log(this.message);
  }


}
