import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http:HttpClient) { }
  postCall(url,data){
    return this.http.post(url,data);
    }

postCallWithToken(url,data,options){
return this.http.post(url,data,options);
}

getCallWithToken(url,options){
  return this.http.get(url,options);
}
}
