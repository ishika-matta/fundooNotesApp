import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {
  url: any;
  auth = false;

  constructor(private httpSvc: HttpService) { }

  addQuestionAndAnswer(data){
    this.url = 'questionAndAnswerNotes/addQuestionAndAnswer';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  getQuestion(data){
    this.url = 'questionAndAnswerNotes/'+data.notesId+'/notes';
    this.auth = true;
    return this.httpSvc.getCall(this.url, this.auth);
  }

  replyQuestion(data){
    this.url = 'questionAndAnswerNotes/reply/'+data.quesId;
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
}

addLike(data){
  this.url = 'questionAndAnswerNotes/like/'+data.notesId;
  this.auth = true;
  return this.httpSvc.postCall(data, this.url, this.auth);
}

addRatings(data){
  this.url = 'questionAndAnswerNotes/rate/'+data.notesId;
  this.auth = true;
  return this.httpSvc.postCall(data, this.url, this.auth);
}
}
