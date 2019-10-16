import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayComponent } from '../display/display.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';

import { Image } from 'ngx-image';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-upload-profile-pic',
  templateUrl: './upload-profile-pic.component.html',
  styleUrls: ['./upload-profile-pic.component.scss']
})
export class UploadProfilePicComponent implements OnInit {
  selectedFile: File=null;
  imageChangedEvent: any = '';
    croppedImage: any = '';

 

  constructor(public dialogRef: MatDialogRef<DisplayComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData, private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
   this.croppedImage = event.base64;
   return this.croppedImage;
}



  onUpload(){
    console.log('dffgdsfg')
    const fd=new FormData();
    
    fd.append('image', this.croppedImage);

    console.log('sdcsadcdsc')

    const  options = {
      data: fd,
      purpose: 'uploadProfileImage'
    };

    this.userService.postWithTokenNotEncoded(options).subscribe((response: any) => {
      console.log('done',response);
      
    }, (error) => {
      console.log('err',error);
    });


  }

}
