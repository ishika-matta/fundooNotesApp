import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { DataService } from 'src/app/services/dataServices/data.service';
import { SearchPipe } from 'src/app/pipe/search.pipe';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  component = 'search-bar';
  searchNote: any;
  @Output() messageEvent = new EventEmitter<string>();


  constructor(private noteService: NoteService, private dataService: DataService) { }
  result1: any;
  notes: any;
  searchText: any;
  message: any;

  filterPipe: SearchPipe = new SearchPipe();
  filteredRecords: any;

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.dataService.currentMessage.subscribe((searchText) => {
      this.searchText = searchText;
      return this.noteService.allNotesList().subscribe((response: any) => {
        this.result1 = this.getFilter(response.data.data);
        this.notes = this.result1.reverse();
        this.filteredRecords = this.filterPipe.transform(this.notes, this.searchText);
        this.searchNote = this.filteredRecords;
      }, (error) => {
        console.log(error.statusText);
      });
    });
  }

  getFilter(result) {
    const pass = result.filter(function (result) {
      return (result.isDeleted == false && result.isArchived == false);
    });
    return pass;
  }

  receiveMessage($event) {
    console.log('event received is: ', $event);
    this.message = $event;
    this.messageEvent.emit(this.message);
    this.getNotes();
  }
}

