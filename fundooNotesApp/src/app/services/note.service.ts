import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpService } from '../services/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrlNotes = environment.baseUrlNotes;

  constructor(private httpSvc: HttpService) { }


  
  getWithToken(options){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    }
    return this.httpSvc.getCallWithToken(this.baseUrlNotes+options.purpose,httpOptions);

  }
  postWithTokenNotEncoded(options) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('id')
      })
    }
    return this.httpSvc.postCallWithToken(this.baseUrlNotes + options.purpose, options.data, httpOptions);
  }

  postWithTokenWithEncoded(options) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    }
    return this.httpSvc.postCallWithToken(this.baseUrlNotes + options.purpose, this.getEncodedData(options.data), httpOptions);
  }



  getEncodedData(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
}

