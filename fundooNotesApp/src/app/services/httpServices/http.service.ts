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

  httpOptionsPic = {
    headers: new HttpHeaders({
      // 'Content-type': 'application/json',
      'Authorization': localStorage.getItem('id')
    })
  };
  // httpOptionsNoteLabel = {
  //   headers: new HttpHeaders({
  //     'Content-type': 'application/x-www-form-urlencoded',
  //     'Authorization': localStorage.getItem('id')
  //   })
  // };
  httpOptionsReset = {
    headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('token')
    })
  };


  constructor(private http: HttpClient) { }

  postCall(data, url, auth) {
    if(auth==false){
      return this.http.post(this.baseUrl+url, data);
    }
    else
    return this.http.post(this.baseUrl+url, data, this.httpOptions);
    }

    postCallPic(data,url){
      return this.http.post(this.baseUrl+url, data, this.httpOptionsPic);

    }

    postCallResetPassword(data,url){
      return this.http.post(this.baseUrl+url, data, this.httpOptionsReset);

    }




    // postWithToken(options) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/x-www-form-urlencoded',
  //       'Authorization': localStorage.getItem('token')
  //     })
  //   };

  //   return this.http.postCallWithToken(this.baseUrlUser + options.purpose, this.getEncodedData(options.data), httpOptions);

  // }

   getCall(url, auth) {
      if(auth==false){
        return this.http.get(this.baseUrl+url);
      }
      
      else
      return this.http.get(this.baseUrl+url, this.httpOptions);
      }
    

    // getCallNoteLabel(url, auth) {
    //   if(auth==false){
    //     return this.http.get(this.baseUrl+url);
    //   }
      
    //   else
    //   return this.http.get(this.baseUrl+url, this.httpOptions);
    //   }


      deleteCall(url){
        return this.http.delete(this.baseUrl+url, this.httpOptions);
        }
    }



    // getWithToken(options) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/x-www-form-urlencoded',
  //       'Authorization': localStorage.getItem('id')
  //     })
  //   };
  //   return this.httpSvc.getCallWithToken(this.baseUrlNoteLabel + options.purpose, httpOptions);

// postCallWithToken(url, data, options) {                       
// return this.http.post(url, data, options);
// }


// deleteCallWithToken(url, options) {
//   return this.http.delete(url, options);
// }
// }


