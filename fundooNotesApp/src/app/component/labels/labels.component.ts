import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
  component = 'labels';
  notes: any;
  @Output() messageEvent = new EventEmitter<string>();


  constructor(private noteService: NoteService, private dataService: DataService) { }

  ngOnInit() {
    this.getNotesByLabels();

  }

  getNotesByLabels() {

    this.dataService.currentMessage.subscribe((res: any) => {
      console.log('dcecxdecx', res)
      let label = {
        labelName: res
      };
      this.noteService.notesListByLabel(label).subscribe((response: any) => {
        this.notes = response.data.data.reverse();
        console.log(response);
      }, (error) => {
        console.log(error.statusText);
      });
    });
  }

  receiveMessage($event) {
    this.messageEvent.emit($event);
    this.getNotesByLabels();
  }
}


