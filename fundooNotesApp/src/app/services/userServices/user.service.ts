import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: any;
  auth = false;

  constructor(private httpSvc: HttpService) { }
  loginUser(data) {
    this.url = 'user/login';
    this.auth = false;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  registerUser(data) {
    this.url = 'user/userSignUp';
    this.auth = false;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

   forgotPassword(data) {
    this.url = 'user/reset';
    this.auth = false;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  resetPassword(data) {
    this.url = 'user/reset-password';
    this.auth = true;
    return this.httpSvc.postCallResetPassword(this.getEncodedData(data), this.url);
  }

  searchUser(data){
    this.url = 'user/searchUserList';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  uploadPic(data) {
    this.url = 'user/uploadProfileImage';
    // this.auth=false;
    return this.httpSvc.postCallPic(data, this.url);

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
