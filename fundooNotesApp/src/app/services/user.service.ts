import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrlUser = environment.baseUrlUser;

  constructor(private http: HttpService) { }


  postWithoutToken(options) {
    return this.http.postCall(this.baseUrlUser + options.purpose, options.data);

  }
  postWithToken(options) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.postCallWithToken(this.baseUrlUser + options.purpose, this.getEncodedData(options.data), httpOptions);

  }
  getEncodedData(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join ('&');
  }
}
