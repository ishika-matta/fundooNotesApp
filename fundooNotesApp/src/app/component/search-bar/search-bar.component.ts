import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { DataService } from 'src/app/services/dataServices/data.service';
import { SearchPipe } from 'src/app/pipe/search.pipe';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() searchModel;
  component='search-bar';

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  @Output() messageEvent = new EventEmitter<string>();
  

  constructor(private noteService:NoteService, private dataService:DataService) { }
  result1:any;
  notes:any;
  // message:string='searchText';
  searchText:any;
  message:any;

  filterPipe: SearchPipe = new SearchPipe();
  filteredRecords:any;

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.dataService.currentMessage.subscribe((searchText) => {
      this.searchText = searchText
    });
    console.log('insiide search bar c........',this.searchText);

    this.noteService.allNotesList().subscribe((response: any) => {
      this.result1 = this.getFilter(response.data.data);
          this.notes = this.result1.reverse();
          this.filteredRecords=this.filterPipe.transform(this.notes,this.searchText);

          
          console.log(response);
        }, (error) => {
          console.log(error.statusText);
        });

}

getFilter(result) {
  const pass = result.filter(function(result) {
    return (result.isDeleted == false && result.isArchived == false);
  });
  return pass;
}

receiveMessage($event) {
  this.message = $event;
  this.messageEvent.emit(this.message);

}

}
