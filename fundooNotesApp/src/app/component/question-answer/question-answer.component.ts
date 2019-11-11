import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/dataServices/data.service';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { QuestionAnswerService } from 'src/app/services/questionAnswerServices/question-answer.service';
import { ActivatedRoute } from '@angular/router';

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
  quesValue: any;
  AnsValue: any;
  TokenAuth: boolean = true;
  options: any;
  noteDetails: any;
  quesToken: any;
  show: boolean = true;
  showReply: boolean = false;
  localstor: any;
  url: any;
  quesAnsLength:any;
  quesAns:any;
  likes:number=0;
  dislikes:number=0;
  countLikes:number=0;
  replyhere:any;
  
  constructor(private dataService: DataService,
    private questionAnswerService: QuestionAnswerService,
    private route: ActivatedRoute,
    private noteService: NoteService) { }

  ngOnInit() {
    this.quesToken = this.route.snapshot.paramMap.get('noteId');
    this.getNoteDetails(this.quesToken);
  }



  questionReply(quesid) {
    let options =
    {
      "message": this.AnsValue,
      "quesId": quesid,
    }
    this.questionAnswerService.replyQuestion(options).subscribe((response) => {
      console.log(response);
      this.replyhere=response;
      console.log(this.replyhere);
      this.toggleReply();
      this.getNoteDetails(this.quesToken);
      this.AnsValue = '';
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

  getNoteDetails(card) {
    this.options = {
      noteIdList: [card]
    }
    this.noteService.getNoteDetail(this.options).subscribe((response: any) => {
      this.noteDetails = response.data.data;
      this.quesAnsLength= this.noteDetails[0].questionAndAnswerNotes.length;
      this.quesAns= this.noteDetails[0].questionAndAnswerNotes;
      console.log('thissss',this.quesAns)
      console.log(this.noteDetails);
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
      console.log('id..........', response);
      this.dataService.changeMessage("Question added");
      this.toggle();
      this.getNoteDetails(this.quesToken);
    }, (error) => {
      console.log(error);
    });
  }

  onReply(id)
  {
    console.log('id',id);
    console.log('length of qa',this.quesAnsLength);
    
    for (var i = 0; i < this.quesAnsLength; i++) {
      if (this.quesAns[i].id == id) {
      this.replyhere = this.quesAns[i].id;
      console.log('opening reply',this.replyhere);      
      this.toggleReply();
      return;
      }
  }
}


  onLike(id){
    let options = {
      "like": true,
      "notesId": id
    }
    this.questionAnswerService.addLike(options).subscribe((response) => {
      console.log('likes', response);
      //this.likes=response.data.details.count;
     // console.log('likes in no ', this.likes);
      this.dataService.changeMessage("Like added");
      this.toggle();
      this.getNoteDetails(this.quesToken);
    }, (error) => {
      console.log(error);
    });
  }

  onDislike(id){
    let options = {
      "like": false,
      "notesId": id
    }
    this.questionAnswerService.addLike(options).subscribe((response) => {
      console.log('dislikes', response);
     // this.dislikes=response.data.details.count;
      //console.log('dislikes in no ', this.dislikes);
      this.dataService.changeMessage("Like added");
      this.toggle();
      this.getNoteDetails(this.quesToken);
    }, (error) => {
      console.log(error);
    });
  }

  counter(id) {
    //console.log('inisde counter of likes')
    this.countLikes = 0;
    for (var i = 1; i < this.quesAnsLength; i++) {
      if (this.quesAns[i].id == id) {
        for (var j = 0; j < this.quesAns[i].like.length; j++) {
          if (this.quesAns[i].like[j].like == true) {
            this.countLikes++;
          }
        }
      }
    }
    return this.countLikes;
  }
}


