// import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { DialogCardComponent } from '../dialog-card/dialog-card.component';
// import { NoteService } from '../../services/noteServices/note.service';


// @Component({
//   selector: 'app-icon',
//   templateUrl: './icon.component.html',
//   styleUrls: ['./icon.component.scss']
// })
// export class IconComponent implements OnInit {
//   message = 'Saved';
//   messageTrash = 'Trash';
//   messageDelFor = 'Deleted Forever';
//   messageGetNotes = 'Get notes';
//   messageArchive = 'Archive notes';
//   notes: any;
//   noteObj: any;
//   options: any;
//   result1: any;
//   filttered: any;
//   @Output() messageEvent = new EventEmitter<string>();
//   @Input() card: any;
//   @Input() archive: any;

//   colorArray: any = [
//     { color: '#ECEEEE' }, { color: '#F28B82' }, { color: '#F7BC04' }, { color: '#FAF474' },
//     { color: '#CBFF90' }, { color: '#AAFEEB' }, { color: '#CBF0F8' }, { color: '#ADCBFA' },
//     { color: '#D7AEFB' }, { color: '#FDCFE8' }, { color: '#E6C9A8' }, { color: '#FFFFFF' }];



//   constructor(private noteService: NoteService) {

//   }

//   ngOnInit() {

//   }


//   // onSave() {
//   //   this.messageEvent.emit(this.message);
//   //   console.log(this.message);
//   // }
//   // onTrash(card) {
//   //   console.log()
//   //   try {
//   //     this.noteObj = {
//   //       'isDeleted': false,
//   //       'noteIdList': [card],
//   //     };
//   //     const options = {
//   //       data: this.noteObj,
//   //       purpose: 'trashNotes',

//   //     };
//   //     this.noteService.postWithTokenNotEncoded(options).subscribe((response: any) => {
//   //       console.log(response);
//   //       //delete notes
//   //       this.messageEvent.emit(this.messageDel);


//   //     }, (error) => {
//   //       console.log(error);
//   //     });

//   //   } catch (err) {
//   //     return err;
//   //   }
//   // }


//   onDeleteForever(card) {

//     this.noteObj = {
//       'isDeleted': false,
//       'noteIdList': [card]
//       };
//     this.noteService.deleteForeverNotes(this.noteObj).subscribe((response: any) => {
//       console.log(response);
//       this.messageEvent.emit(this.messageDelFor);
//     }, (error) => {
//       console.log(error);
//     });

//   }


//   onTrash(card) {
//     this.noteObj = {
//       'isDeleted': true,
//       'noteIdList': [card]
//       };
//     this.options = {
//       data: this.noteObj,
//       purpose: 'trashNotes',

//     };

//     this.noteService.postWithTokenNotEncoded(this.options).subscribe((response: any) => {
//        console.log(response);
//         this.messageEvent.emit(this.messageTrash);
//     }, (error) => {
//       console.log(error);
//     });
//   }

//   onArchive(card) {
//     this.noteObj = {
//       'isArchived': true,
//       'noteIdList': [card]
//       };

//     this.noteService.archiveNotes(this.noteObj).subscribe((response: any) => {
//        console.log(response);
//         this.messageEvent.emit(this.messageArchive);
//     }, (error) => {
//       console.log(error);
//     });
//   }

//   onUnArchive(card) {
//     this.noteObj = {
//       'isArchived': false,
//       'noteIdList': [card]
//       };
//     this.options = {
//       data: this.noteObj,
//       purpose: 'archiveNotes',

//     };

//     this.noteService.postWithTokenNotEncoded(this.options).subscribe((response: any) => {
//        console.log(response);
//         this.messageEvent.emit(this.messageArchive);
//     }, (error) => {
//       console.log(error);
//     });
//   }




//   changeColor(colors, card) {
//     try {
//       this.noteObj = {
//         'noteIdList': [card],
//         'color': colors,
//       };

//       this.noteService.changeColorNotes(this.noteObj).subscribe((response: any) => {
//         console.log(response);
//         //get notes
//         this.messageEvent.emit(this.messageGetNotes);


//       }, (error) => {
//         console.log(error);
//       });

//     } catch (err) {
//       return err;
//     }

//   }
// }
