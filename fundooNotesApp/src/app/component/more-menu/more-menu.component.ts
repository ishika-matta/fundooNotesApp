import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';
import { NoteLabelService } from 'src/app/services/noteLabelServices/note-label.service';
import { DataService } from 'src/app/services/dataServices/data.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-menu',
  templateUrl: './more-menu.component.html',
  styleUrls: ['./more-menu.component.scss']
})
export class MoreMenuComponent implements OnInit {
  @Input() component: any;
  notes: any;
  noteObj: any;
  messageDelFor = 'Deleted Forever';
  messageTrash = 'Note Trash';
  messageLabels = 'Note labels';
  options: any;
  labels: any;
  labelData:any;
  message: any;
  durationInSeconds = 5;
  noteDetails: any;
  onAskQuesAns: any;
  showCheckbox: boolean=false;
  messageShowCheckboxes=' Note Checkboxes';

  @Output() messageEvent = new EventEmitter<string>();
  @Output() labelEvent = new EventEmitter();
  @Input() card: any;

  constructor(private router:Router, private noteService: NoteService, private noteLabelService: NoteLabelService,
    private dataService: DataService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    this. getAllLabels();

    this.dataService.quesMessage.subscribe((res) => {
      this.onAskQuesAns = res;
  });
}


  onDeleteForever(card) {
    this.noteObj = {
      'isDeleted': true,
      'noteIdList': [card]
    };
    this.noteService.deleteForeverNotes(this.noteObj).subscribe((response: any) => {
      console.log(response);
      this.openSnackBar('Note deleted permanently', 'Dismiss');
      this.messageEvent.emit(this.messageDelFor);
      this.dataService.trashMessage(this.message);
    }, (error) => {
      console.log(error);
    });
  }

  onRestore(card) {
    this.noteObj = {
      'isDeleted': false,
      'noteIdList': [card]
    };

    this.noteService.trashNotes(this.noteObj).subscribe((response: any) => {
      console.log(response);
      this.openSnackBar('Note restored', 'Dismiss');
      this.messageEvent.emit(this.messageTrash);
      this.dataService.trashMessage(this.message);
    }, (error) => {
      console.log(error);
    });
  }

  onTrash(card) {
    this.noteObj = {
      'isDeleted': true,
      'noteIdList': [card]
      };
    this.noteService.trashNotes(this.noteObj).subscribe((response: any) => {
       console.log(response);
       //snackbar implementation
       this.openSnackBar('Note deleted', 'Dismiss');
        this.messageEvent.emit(this.messageTrash);
        this.dataService.trashMessage(this.messageTrash);

    }, (error) => {
      console.log(error);
    });
  }

  onOpenAddLabel(labelid,labelname) {
    if(!this.card){
      console.log('adding a label without note id');
      this.labelData={
        labelid,
        labelname
      }
      console.log('adding a label without note id',this.labelData);
      this.labelEvent.emit(this.labelData);
    }
    else{
    this.noteObj = {
      labelId: labelid,
      noteId: this.card
    };
     this.noteService.addLabelToNotes(this.noteObj).subscribe((response: any) => {
      console.log('adding a label..before data service',response);
      this.messageEvent.emit(this.messageLabels);
      this.dataService.labelMessage(labelname);
      console.log('after data service', response);
    }, (error) => {
      console.log(error);
    });
  }
}


  getAllLabels() {
    this.noteLabelService.getNoteLabels().subscribe((response: any) => {
     // console.log(response);
      this.labels = response.data.details.reverse();
      // this.dataService.changeMessage("fundoo")
    }, (error) => {
      console.log(error);
    });
  }

  openSnackBar(msg, action) {
    this.snackBar.open(msg, action, {
      duration: 2000})
  }


  onQA(card){
    this.router.navigate(['/question-answer/'+ card]);
    this.options={
      noteIdList: [card]
    }
    this.noteService.getNoteDetail(this.options).subscribe((response:any) => {
      this.noteDetails= response.data.data;
      //this.notedetails= Array.of(this.notedetails); 
      this.dataService.askQuestion(this.noteDetails) 
    }, (error) => {
      console.log(error);
    });
  }

  

    onShowCheckboxes(card){
      this.showCheckbox = !this.showCheckbox;
      if(card){   
      console.log('showwww', this.showCheckbox)
      this.options={
        noteIdList: [card],
        show:this.showCheckbox
      }
      this.dataService.viewCheckbox(this.options);
    }
    else{
      console.log('not card')
      this.dataService.viewCheckbox(this.showCheckbox);
    }
  }
  
  }

