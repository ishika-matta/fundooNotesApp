import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url:any;
  auth:boolean=false;

  constructor(private httpSvc: HttpService) { }

  addNotes(data){
    this.url='notes/addNotes';
    this.auth=true;
    return this.httpSvc.postCall(data,this.url,this.auth);
  }

  archiveNotes(data){
    this.url='notes/archiveNotes';
    this.auth=true;
    return this.httpSvc.postCall(data,this.url,this.auth);
  }

  trashNotes(data){
    this.url='notes/trashNotes';
    this.auth=true;
    return this.httpSvc.postCall(data,this.url,this.auth);

  }

  deleteForeverNotes(data){
    this.url='notes/deleteForeverNotes';
    this.auth=true;
    return this.httpSvc.postCall(data,this.url,this.auth);

  }

  updateNotes(data){
    this.url='notes/updateNotes';
    this.auth=true;
    return this.httpSvc.postCall(data,this.url,this.auth);

  }

  changeColorNotes(data){
    this.url='notes/changesColorNotes';
    this.auth=true;
    return this.httpSvc.postCall(data,this.url,this.auth);

  }
  
  archiveNotesList(){
    this.url='notes/getArchiveNotesList';
    this.auth=true;
    return this.httpSvc.getCall(this.url,this.auth);

  }

  allNotesList(){
    this.url='notes/getNotesList';
    this.auth=true;
    return this.httpSvc.getCall(this.url,this.auth);

  }

  trashNotesList(){
    this.url='notes/getTrashNotesList';
    this.auth=true;
    return this.httpSvc.getCall(this.url,this.auth);

  }

  addLabelToNotes(data){
    this.url='notes/'+data.noteId+'/addLabelToNotes/'+data.labelId+'/add';
    this.auth=true;
    return this.httpSvc.postCall(data,this.url,this.auth)
  }
}
