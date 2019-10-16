import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { NoteLabelService } from '../../services/note-label.service';
import { DataService } from '../../services/data.service';
import { UploadProfilePicComponent } from '../upload-profile-pic/upload-profile-pic.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  labels: any;
  email= localStorage.getItem('email');
  firstName= localStorage.getItem('firstName');
  lastName= localStorage.getItem('lastName');

  constructor(private auth: AuthService, private router: Router,
     public dialog: MatDialog, private noteLabelService: NoteLabelService,
     private data: DataService) { }
     

  ngOnInit() {
    this.getLabels();
    this.data.currentMessage.subscribe((res) => {
      this.getLabels();
    });
  }

  getLabels() {

    const options = {
          purpose: 'getNoteLabelList',
        };
      this.noteLabelService.getWithToken(options).subscribe((response: any) => {
        this.labels = response.data.details.reverse();
            console.log(response.data.details);
          }, (error) => {
            console.log(error.statusText);
          });
}

  gotoNotes() {
    this.router.navigate(['/goto-notes']);
  }
  gotoTrash() {
    this.router.navigate(['/goto-trash']);
  }
  gotoArchive() {
    this.router.navigate(['/goto-archive']);
  }
  onEdit() {
    //open dialog box
      const dialogRef = this.dialog.open(DialogBoxComponent);

      dialogRef.afterClosed().subscribe(
        result => {
          console.log('Dialog output:', result);

        }
      );
    }

    openDialog1(): void {

      const dialogRef = this.dialog.open(UploadProfilePicComponent,
        {
        });
      dialogRef.afterClosed().subscribe(
        result => {
          console.log('Dialog output:', result);
         
      
  
    }
      )
  
   
  }
  
  
}

