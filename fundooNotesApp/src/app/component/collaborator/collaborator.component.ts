import { Component, OnInit, Input } from '@angular/core';
import { CollabDialogBoxComponent } from '../collab-dialog-box/collab-dialog-box.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  @Input() card:any;
  message:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  //open dialog box

  onCollab(card){
    console.log('dscdscsc..', card);

    this.dialog.open(CollabDialogBoxComponent, {
      data:
      {
        card: card,
      }
    });
    }

    receiveMessage($event) {
      this.message = $event;
      //this.messageEvent.emit(this.message);
    }



  }


