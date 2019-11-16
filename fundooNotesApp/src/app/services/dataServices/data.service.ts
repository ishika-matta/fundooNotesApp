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

  private collabSource = new BehaviorSubject('');
  collabCurrentMessage = this.collabSource.asObservable();

  private reminderSource = new BehaviorSubject('');
  reminderCurrentMessage = this.reminderSource .asObservable();

  private labelSource = new BehaviorSubject('');
  labelCurrentMessage = this.labelSource .asObservable();

  private trashSource = new BehaviorSubject('save');
  trashCurrentMessage = this.trashSource .asObservable();

  private archiveSource = new BehaviorSubject('');
  archiveCurrentMessage = this.archiveSource .asObservable();

 
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

  collabMessage(message:any) {
    this.collabSource.next(message);
  }

  reminderMessage(message:any) {
    this.reminderSource.next(message);
  }

  labelMessage(message:any) {
    this.labelSource.next(message);
  }

  trashMessage(message:any) {
    this.trashSource.next(message);
  }

  archiveMessage(message:any) {
    this.archiveSource.next(message);
  }
  
}
