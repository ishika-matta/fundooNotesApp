import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-archive-un',
  templateUrl: './archive-un.component.html',
  styleUrls: ['./archive-un.component.scss']
})
export class ArchiveUnComponent implements OnInit {
  noteObj:any;
  options:any;
  message:string;
  @Input() card: any;
  @Input() archive: any;

  @Output() messageEvent = new EventEmitter<string>()

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  onArchive(card) {
    this.noteObj = {
      'isArchived': true,
      'noteIdList': [card]
      };
    this.options = {
      data: this.noteObj,
      purpose: 'archiveNotes',

    };

    this.noteService.postWithTokenNotEncoded(this.options).subscribe((response: any) => {
       console.log(response);
        this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error);
    });
  }

  onUnArchive(card) {
    this.noteObj = {
      'isArchived': false,
      'noteIdList': [card]
      };
    this.options = {
      data: this.noteObj,
      purpose: 'archiveNotes',

    };

    this.noteService.postWithTokenNotEncoded(this.options).subscribe((response: any) => {
       console.log(response);
        this.messageEvent.emit(this.message);
    }, (error) => {
      console.log(error);
    });
  }

}
