import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  message:string="Saved";
  @Output() MessageEvent=new EventEmitter<string>();
  

  constructor() { }

  ngOnInit() {
  }


  onSave() {
    this.MessageEvent.emit(this.message);
    console.log(this.message);
  }


}
