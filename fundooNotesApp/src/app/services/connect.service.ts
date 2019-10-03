import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  response: any;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient){
  }

  
  print(arg){
    console.log(arg);
  }
  
  postWithoutToken(obj){
    return (this.http.post(this.baseUrl+obj.purpose, obj.data));
  }
 
}
