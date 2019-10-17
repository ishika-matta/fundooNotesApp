import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteLabelService {
  url:any;
  auth:boolean=false;




  constructor(private httpSvc: HttpService) { }



  createNoteLabel(data) {
    this.url='noteLabels/';
    this.auth=true;
    return this.httpSvc.postCall(this.url, data, this.auth);
  }

  getNoteLabels() {
    this.url='noteLabels/getNoteLabelList';
    this.auth=true;
    return this.httpSvc.getCall(this.url, this.auth);
  }

  // deleteNoteLabel(data) {
  //   this.url='noteLabels/deleteNoteLabel';
  //   this.auth=true;
  //   return this.httpSvc.deleteCall(this.url, data, this.auth);
  // }
  



  // getWithToken(options) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/x-www-form-urlencoded',
  //       'Authorization': localStorage.getItem('id')
  //     })
  //   };
  //   return this.httpSvc.getCallWithToken(this.baseUrlNoteLabel + options.purpose, httpOptions);

  // }

  // getWithTokenNotEncoded(options) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': localStorage.getItem('id')
  //     })
  //   };
  //   return this.httpSvc.getCallWithToken(this.baseUrlNoteLabel + options.purpose, httpOptions);

  // }
  // postWithTokenNotEncoded(options) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': localStorage.getItem('id')
  //     })
  //   };
  //   return this.httpSvc.postCallWithToken(this.baseUrlNoteLabel + options.purpose, options.data, httpOptions);
  // }

  // postWithTokenWithEncoded(options) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/x-www-form-urlencoded',
  //       'Authorization': localStorage.getItem('id')
  //     })
  //   };
  //   return this.httpSvc.postCallWithToken(this.baseUrlNoteLabel + options.purpose, this.getEncodedData(options.data), httpOptions);
  // }



  // getEncodedData(data) {
  //   const formBody = [];
  //   for (const property in data) {
  //     const encodedKey = encodeURIComponent(property);
  //     const encodedValue = encodeURIComponent(data[property]);
  //     formBody.push(encodedKey + '=' + encodedValue);
  //   }
  //   return formBody.join('&');
  // }

  // deleteWithToken(options) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/x-www-form-urlencoded',
  //       'Authorization': localStorage.getItem('id')
  //     })
  //   };
  //   return this.httpSvc.deleteCallWithToken(this.baseUrlNoteLabel + options.data.id + options.purpose, httpOptions);
  // }
}
