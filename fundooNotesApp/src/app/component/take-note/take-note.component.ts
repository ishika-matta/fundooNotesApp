import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
import { FormControl } from '@angular/forms';
import { TakeNote } from 'src/app/models/take-note.model';
import { DataService } from 'src/app/services/dataServices/data.service';


@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  takeNoteObj: TakeNote = new TakeNote();
  message = 'Fundoo';
  title = new FormControl();
  description = new FormControl();
  show = true;
  component = 'take-note';
  til: any;
  des: any;
  color: any = "#ffffff";
  reminder: any;
  label: any;
  labelName: any;
  labelId: any;
  showCheckbox: any;
  labelIdArray: any = [];
  labelNameArray: any = [];
  checkListArray: any = [];
  item = new FormControl;
  itemModel: any;
  checklistIndex: any;


  @Output() messageEvent = new EventEmitter<string>();
  @Output() reminderEvent = new EventEmitter<string>();
  @Output() labelEvent = new EventEmitter<string>();





  constructor(private noteService: NoteService, private dataService: DataService) { }

  ngOnInit() {
    console.log('hereee')
    this.dataService.viewCheckMessage.subscribe((res: any) => {
      console.log(res);

      if (res == true) {
        this.showCheckbox = res;

        console.log('showwww in if', this.showCheckbox)
      }
      else
        console.log('showwww in else', this.showCheckbox)

    })

  }
  toggle() {
    this.til = '';
    this.des = '';
    this.color = '';
    this.reminder = '';
    this.labelName = '';
    console.log('toggleddd');


    this.show = !this.show;
  }


  postNotes() {
    if (!this.title.value && !this.description.value) {
      this.toggle();
    }
    else {
      this.takeNoteObj = {
        title: this.title.value,
        description: this.description.value,
        color: this.color,
        reminder: this.reminder,
        labelIdList: JSON.stringify(this.labelIdArray),
        checklist: JSON.stringify(this.checkListArray),
      };
      console.log(this.takeNoteObj);

      this.noteService.addNotes(this.takeNoteObj).subscribe((response: any) => {
        console.log(response);

        this.toggle();
        this.messageEvent.emit(this.message);

      }, (error) => {
        console.log(error);
      });
    }
  }
  onClearReminder() {
    this.reminder = '';
  }



  receiveMessage($event) {
    this.color = $event;
    console.log('event received in take note', this.color);
    // this.messageEvent.emit(this.color);
  }

  receiveReminderMessage($event) {
    this.reminder = $event;
    console.log('event received in take note', this.reminder);
    // this.reminderEvent.emit(this.reminder);
  }
  receiveLabelMessage($event) {
    this.label = $event;
    console.log('event received in take note', this.label);
    this.labelName = this.label.labelname;
    this.labelId = this.label.labelid;
    this.labelIdArray.push(this.labelId);
    this.labelNameArray.push(this.labelName);
    console.log('label anme', this.labelId);

    // this.labelEvent.emit(this.label);
  }



  deletechecklist(itemName) {
    this.checklistIndex = this.checkListArray.findIndex(i => i.itemName === itemName);
    console.log("index....", this.checkListArray.findIndex(i => i.itemName === itemName));
    this.checkListArray.splice(this.checklistIndex, 1);
  }

  onAddCheckList() {
    this.checkListArray[this.checkListArray.length] = { itemName: this.item.value, status: "open" };
    this.itemModel = '';
    console.log("Array...", this.checkListArray)
  }

  onRemoveCheckList(itemName) {
    this.checklistIndex = this.checkListArray.findIndex(i => i.itemName === itemName);
    console.log("index....", this.checkListArray.findIndex(i => i.itemName === itemName));
    this.checkListArray.splice(this.checklistIndex, 1);
  }

  onUpdateCheckList(status, itemName) {
    this.checklistIndex = this.checkListArray.findIndex(i => i.itemName === itemName);
    if (status == 'open') {
      this.checkListArray[this.checklistIndex].status = 'close';
    } else {
      this.checkListArray[this.checklistIndex].status = 'open';
    }
  }
}
