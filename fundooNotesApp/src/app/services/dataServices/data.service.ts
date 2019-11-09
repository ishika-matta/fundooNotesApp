import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();


  private viewSource = new BehaviorSubject('default message');
  viewMessage = this.viewSource.asObservable();

  private quesSource = new BehaviorSubject('0');
  quesMessage = this.quesSource.asObservable();

  private viewCheckSource = new BehaviorSubject('default message');
  viewCheckMessage = this.viewCheckSource.asObservable();

 
  message: string;

  constructor() { }
  changeMessage(message) {
    this.messageSource.next(message);
  }

  askQuestion(message: any) {
    this.quesSource.next(message);
  }

  viewList(message:any)
  {
    this.viewSource.next(message);
  }

  viewCheckbox(message:any)
  {
    this.viewCheckSource.next(message);
  }
  
}
