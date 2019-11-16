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
  archived: false;
  collaberators: any;
  label: any;
  labelName: any;
  collabName :any;
  labelId: any;
  showCheckbox: any;
  labelIdArray: any = [];
  labelNameArray: any = [];
  checkListArray: any = [];
  collaboratorsArray: any = [];
  item = new FormControl;
  itemModel: any;
  checklistIndex: any;
  noteLabelIndex: any;


  @Output() messageEvent = new EventEmitter<string>();
  @Output() reminderEvent = new EventEmitter<string>();
  @Output() labelEvent = new EventEmitter<string>();





  constructor(private noteService: NoteService, private dataService: DataService) { }

  ngOnInit() {
    console.log('hereee')
    //checkboxes
    this.dataService.viewCheckMessage.subscribe((res: any) => {
      console.log(res);
      if (res == true) {
        this.showCheckbox = res;
        console.log('showwww in if', this.showCheckbox)
      }
      else
        console.log('showwww in else', this.showCheckbox)
    });

    //archive notes
    this.dataService.currentMessage.subscribe((res: any) => {
      console.log(res);
      if (res == true) {
        this.archived = res;
        this.postNotes();
        console.log('showwww in if', this.archived);
      }
      else{
        this.archived = false;
        console.log('showwww in else', this.archived);
      }    
    });

    //add collab
    this.dataService.collabCurrentMessage.subscribe((res: any) => {
      console.log(res);
      if (res!=undefined) {
        this.collaberators = res;
        
        this.collabName = this.collaberators.firstName;
        if(this.collaberators!=''){
        this.collaboratorsArray.push(this.collaberators);
        console.log(this.collaboratorsArray);}
        console.log('showwww in if', this.collaberators);
      }
      else{
        console.log('showwww in else', this.collaberators);
      }    
    });

  }

  toggle() {
    this.til = '';
    this.des = '';
    this.color = '';
    this.reminder = '';
    this.labelName = '';
    this.itemModel = '';
    this.checkListArray = [];
    this.labelNameArray = [];
    this.labelIdArray = [];
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
        isArchived: this.archived,
        collaberators: JSON.stringify(this.collaboratorsArray),
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
  }

  receiveReminderMessage($event) {
    this.reminder = $event;
    console.log('event received in take note', this.reminder);
  }

  receiveLabelMessage($event) {
    this.label = $event;
    console.log('event received in take note', this.label);
    this.labelName = this.label.labelname;
    this.labelId = this.label.labelid;
    this.labelIdArray.push(this.labelId);
    this.labelNameArray.push(this.labelName);
  }

  onClearLabel(labelName){
    console.log(labelName);
    for(var i=0;i<this.labelNameArray.length;i++){
      console.log('inised for');
      if(this.labelNameArray[i]==labelName){
        this.labelNameArray.splice(i, 1);
        this.labelIdArray.splice(i, 1);
      }
    }
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
