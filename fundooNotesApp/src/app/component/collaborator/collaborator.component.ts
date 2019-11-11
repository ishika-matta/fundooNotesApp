import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CollabDialogBoxComponent } from '../collab-dialog-box/collab-dialog-box.component';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  @Input() card:any;
  private dialogRef;
  message:any;
  updatedMessage: any;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe((message) => {
      this.updatedMessage=message;
    });
  }
  //open dialog box

  onCollab(card){
    console.log('dscdscsc..', card);

    this.dialogRef =  this.dialog.open(CollabDialogBoxComponent, {
      data:
      {
        card: card,
      }
    });
    this.dialogRef.afterClosed().subscribe(
      data =>{ console.log("Dialog output:", data)
      this.messageEvent.emit(this.updatedMessage);
    })
  }
}


