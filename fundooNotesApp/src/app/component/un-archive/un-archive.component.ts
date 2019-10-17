import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NoteService } from '../../services/noteServices/note.service';

@Component({
  selector: 'app-un-archive',
  templateUrl: './un-archive.component.html',
  styleUrls: ['./un-archive.component.scss']
})
export class UnArchiveComponent implements OnInit {
  noteObj:any;
  options:any;
  message:string;
  @Input() card: any;
  @Input() archive: any;

  @Output() messageEvent = new EventEmitter<string>()

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  onUnArchive(card) {
    this.noteObj = {
      'isArchived': false,
      'noteIdList': [card]
      };

    this.noteService. archiveNotes(this.noteObj).subscribe((response: any) => {
       console.log(response);
        this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error);
    });
  }


}
