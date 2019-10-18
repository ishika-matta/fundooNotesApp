import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authServices/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { environment } from '../../../environments/environment';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { NoteLabelService } from '../../services/noteLabelServices/note-label.service';
import { DataService } from '../../services/dataServices/data.service';
import { UploadProfilePicComponent } from '../upload-profile-pic/upload-profile-pic.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchText:any;
  labels: any;
  url:any;
  pic:any;
  baseUrlPic = environment.baseUrlPic;
  email= localStorage.getItem('email');
  firstName= localStorage.getItem('firstName');
  lastName= localStorage.getItem('lastName');

  constructor(private auth: AuthService, private router: Router,
     public dialog: MatDialog, private noteLabelService: NoteLabelService,
     private dataService: DataService) { }
     

  ngOnInit() {
    this.getNotesLabels();
    this.dataService.currentMessage.subscribe((res) => {
      this.getNotesLabels();
      this.getPic();
    });
  }

  getNotesLabels() {
    
      this.noteLabelService.getNoteLabels() .subscribe((response: any) => {
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

   
  }

  getPic(){
    this.pic=localStorage.getItem('pic');
    this.url=this.baseUrlPic+this.pic;
    console.log('imageeee',this.url);
    

  }

  // onSearchClick(){
  //   this.dataService.changeMessage(this.searchText);
  //   // this.router.navigate(['/search-bar']);
  // }

  onKeyUp(event: any) {
    this.searchText = event.target.value;
    console.log(this.searchText);
    this.dataService.changeMessage(this.searchText)
    };
  
  
}

