import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NoteLabelService } from '../../services/noteLabelServices/note-label.service';
import { DataService } from '../../services/dataServices/data.service';
import { TakeNote } from '../../models/take-note.model';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/authServices/auth.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  options: any;
  noteObj: any = new TakeNote();
  noteObj1: any;
  labelValue: any = new FormControl();
  labels: any;
  labelMessage = ' label added';
  delLabelMessage = 'label deleted';
   @Output() noteMessageEvent = new EventEmitter<string>();

  constructor( public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData,
    private noteLabelService: NoteLabelService, private dataService: DataService,
    private authService: AuthService) {
    }

  ngOnInit() {
    this.getNoteLabels();
  }

  getNoteLabels() {

        this.noteLabelService.getNoteLabels().subscribe((response: any) => {
          this.labels = response.data.details.reverse();
              console.log(response.data.details);

            }, (error) => {
              console.log(error.statusText);
            });
  }

  onCreateLabel(){

    this.noteObj1 = {
      'label': this.labelValue.value,
      'isDeleted': false,
      'userId': this.authService.getToken()
    };


    this.noteLabelService.createNoteLabel(this.noteObj1).subscribe((response) => {
      console.log('inside dailog box....47');
      console.log(response);
      this.getNoteLabels();
      this.dataService.changeMessage(this.labelMessage);
    }, (error) => {
      console.log(error);
    });
  }
  onDone() {
    this.dialogRef.close('Closed');
  }

  // onDelete(label) {
  //   this.noteObj1 = {
  //     id: label.id,
  //   };

  //   return this.noteLabelService.deleteNoteLabel(this.noteObj1).subscribe((response: any) => {
  //     console.log(response);
  //     this.getNoteLabels();
  //     this.dataService.changeMessage(this.delLabelMessage);
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

  }


