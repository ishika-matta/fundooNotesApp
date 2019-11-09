import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': localStorage.getItem('id')
    })
  };

  constructor(private http: HttpClient) { }

  postCall(data, url, auth) {
    if (auth == false) {
      return this.http.post(this.baseUrl + url, data);
    } else {
      return this.http.post(this.baseUrl + url, data, this.httpOptions);
    }
  }
  postCallAddNotes(data, url) {
    const httpOptionsAddNotes = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    };
    return this.http.post(this.baseUrl + url, data, httpOptionsAddNotes);
  }

  patchCall(data, url, auth) {
    if (auth == false) {
      return this.http.patch(this.baseUrl + url, data);
    } else {
      return this.http.patch(this.baseUrl + url, data, this.httpOptions);
    }
  }

  postCallPic(data, url) {
    const httpOptionsPic = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('id')
      })
    };
    return this.http.post(this.baseUrl + url, data, httpOptionsPic);
  }

  postCallResetPassword(data, url) {
    const httpOptionsReset = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.baseUrl + url, data, httpOptionsReset);
  }

  getCall(url, auth) {
    if (auth == false) {
      return this.http.get(this.baseUrl + url);
    } else {
      return this.http.get(this.baseUrl + url, this.httpOptions);
    }
  }

  deleteCall(url) {
    return this.http.delete(this.baseUrl + url, this.httpOptions);
  }
}
