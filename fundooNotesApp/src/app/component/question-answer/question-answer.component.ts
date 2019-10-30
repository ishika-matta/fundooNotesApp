import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/dataServices/data.service';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { FormControl } from '@angular/forms';
import { QuestionAnswerService } from 'src/app/services/questionAnswerServices/question-answer.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  today = new Date();
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  noteData: any;
  quesValue:any;
  AnsValue:any;
  TokenAuth: boolean = true;
  options:any;
  notedetails:any;
  quesToken:any;
  show: boolean = true;
  showReply: boolean = false;
  localstor:any;
  url:any;
  recordsques:any;
  dataQues:any;

  constructor(private dataService: DataService, 
              private questionAnswerService: QuestionAnswerService,
              private route: ActivatedRoute,
              private noteService: NoteService) { }

  ngOnInit() {  
    
    console.log('dateee',this.today);
    
    this.quesToken = this.route.snapshot.paramMap.get('noteId');
    this.GetNoteDetails(this.quesToken); 
  }



  QuestionReply(quesid)
  {
    let options=
    {
      "message": this.AnsValue,
      "quesId": quesid
    }
    this.questionAnswerService.replyQuestion(options).subscribe((response) => {
      console.log(response);
      this.toggleReply();
      this.AnsValue='';
    }, (error) => {
      console.log(error);
    });

  }
 
  toggleReply() {
    this.showReply = !this.showReply;
  }
  toggle() {
    this.show = !this.show;
  }

  GetNoteDetails(card)
  {
    this.options={
      noteIdList: [card]
    }
    this.noteService.getNoteDetail(this.options).subscribe((response:any) => {
      this.notedetails= response.data.data;
      this.dataQues=this.notedetails.questionAndAnswerNotes;
      console.log('///////',this.notedetails);
      console.log('///////',this.dataQues);
    }, (error) => {
      console.log(error);
    });
    
  }
 

  askQues(id) {
    let options = {
      "message": this.quesValue,
      "notesId": id
    }
    this.questionAnswerService.addQuestionAndAnswer(options).subscribe((response) => {
      console.log('id..........',response);
      this.toggle();
     
       
    }, (error) => {
      console.log(error);
    });
  }


  }

