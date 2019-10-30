import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url: any;
  auth = false;

  constructor(private httpSvc: HttpService) { }

  addNotes(data) {
    this.url = 'notes/addNotes';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  archiveNotes(data) {
    this.url = 'notes/archiveNotes';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  trashNotes(data) {
    this.url = 'notes/trashNotes';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  deleteForeverNotes(data) {
    this.url = 'notes/deleteForeverNotes';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  updateNotes(data) {
    this.url = 'notes/updateNotes';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  changeColorNotes(data) {
    this.url = 'notes/changesColorNotes';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  archiveNotesList() {
    this.url = 'notes/getArchiveNotesList';
    this.auth = true;
    return this.httpSvc.getCall(this.url, this.auth);
  }

  allNotesList() {
    this.url = 'notes/getNotesList';
    this.auth = true;
    return this.httpSvc.getCall(this.url, this.auth);
  }

  trashNotesList() {
    this.url = 'notes/getTrashNotesList';
    this.auth = true;
    return this.httpSvc.getCall(this.url, this.auth);
  }

  notesListByLabel(label) {
    this.url = 'notes/getNotesListByLabel/' + label.labelName;
    this.auth = true;
    return this.httpSvc.postCall(label, this.url, this.auth);
  }

  addLabelToNotes(data) {
    this.url = 'notes/' + data.noteId + '/addLabelToNotes/' + data.labelId + '/add';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  removeLabelToNote(data) {
    this.url = 'notes/' + data.noteId + '/addLabelToNotes/' + data.labelId + '/remove';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  addUpdateReminderNotes(data) {
    this.url = 'notes/addUpdateReminderNotes';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  reminderNotesList(){
    this.url = 'notes/getReminderNotesList';
    this.auth = true;
    return this.httpSvc.getCall(this.url, this.auth);
  }
  removeReminderToNote(data){
    this.url = 'notes/removeReminderNotes';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }
  addCollabToNotes(data,noteId){
    this.url = 'notes/' + noteId + '/AddcollaboratorsNotes/';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);

  }
  patchCollabToNotes(data){
    this.url = 'notes/' + data.id;
    this.auth = true;
    return this.httpSvc.patchCall(data,this.url, this.auth);
  }
  deleteCollabToNotes(data){
    this.url = 'notes/' + data.id + '/removeCollaboratorsNotes/' + data.userId ;
    return this.httpSvc.deleteCall(this.url);
  }

  getNoteDetail(data) {
    this.url = 'notes/getNotesDetail/' + data.noteIdList;
    this.auth = true;
    return this.httpSvc.getCall( this.url, this.auth);
  }

}
