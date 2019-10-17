import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayComponent } from '../display/display.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/userServices/user.service';

import { Image } from 'ngx-image';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-upload-profile-pic',
  templateUrl: './upload-profile-pic.component.html',
  styleUrls: ['./upload-profile-pic.component.scss']
})
export class UploadProfilePicComponent implements OnInit {
  selectedFile: File=null;
  imageChangedEvent: any = '';
    croppedImage: any = '';
    message:string='upload';

 

  constructor(public dialogRef: MatDialogRef<DisplayComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData, private userService: UserService,
     private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      message => this.message = message);
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
  console.log(event);
   this.croppedImage = event.file;
}



  onUpload(){
    console.log('dffgdsfg')
    const fd=new FormData();
    
    fd.append('file', this.croppedImage);

    console.log('sdcsadcdsc')

  

    this.userService.uploadPic(fd).subscribe((response: any) => {
      console.log('done',response.status.imageUrl);
      localStorage.setItem('pic', response.status.imageUrl);
      this.dataService.changeMessage(this.message);
      this.dialogRef.close();
      
    }, (error) => {
      console.log('err',error);
    });


  }

}
