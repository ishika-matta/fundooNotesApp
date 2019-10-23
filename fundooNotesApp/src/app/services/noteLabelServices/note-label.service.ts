import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteLabelService {
  url: any;
  auth = false;

  constructor(private httpSvc: HttpService) { }

  createNoteLabel(data) {
    this.url = 'noteLabels';
    this.auth = true;
    return this.httpSvc.postCall( data, this.url, this.auth);
  }

  getNoteLabels() {
    this.url = 'noteLabels/getNoteLabelList';
    this.auth = true;
    return this.httpSvc.getCall(this.url, this.auth);
  }


  deleteNoteLabel(data) {
    this.url = 'noteLabels/' + data.id + '/deleteNoteLabel';
    return this.httpSvc.deleteCall(this.url);
  }


  updateNoteLabel(data) {
  this.url = 'noteLabels/' + data.id + '/updateNoteLabel';
  this.auth = true;
  return this.httpSvc.postCall(data, this.url, this.auth);
  }
}
