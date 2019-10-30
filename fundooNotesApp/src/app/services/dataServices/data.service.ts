import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  private quesSource = new BehaviorSubject('default message');
  quesMessage = this.quesSource.asObservable();

  private viewSource = new BehaviorSubject('default message');
  viewMessage = this.viewSource.asObservable();

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
}
