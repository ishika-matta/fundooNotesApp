import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';
import { NoteService } from '../../services/note.service';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  message:string="Saved";
  notes:any;
  noteObj:any;
  @Output() messageEvent=new EventEmitter<string>();
  @Input() card: any;

   colorArray: any = [
    {color:'#ECEEEE'}, {color:'#F28B82'}, {color:'#F7BC04'}, {color:'#FAF474'}, 
    {color:'#CBFF90'}, {color:'#AAFEEB'}, {color:'#CBF0F8'},{color: '#ADCBFA'},
    {color:'#D7AEFB'}, {color:'#FDCFE8'}, {color:'#E6C9A8'},{color: '#FFFFFF'}];
  
 

  constructor(private noteService: NoteService) {

   }

  ngOnInit() {
  }


  onSave() {
    this.messageEvent.emit(this.message);
    console.log(this.message);
  }

  changeColor(colors,card){
   

    try{
    
      this.noteObj={
        "noteListId": card.id,
        "color":colors,
      }
      let options={
        data: this.noteObj,
      purpose: 'changesColorNotes',

      }
      this.noteService.postWithToken(options).subscribe((response:any) => {
        this.notes=response.data.data;
        console.log(response);
      },(error)=>{
        console.log(error);
      })

      

    }catch(err){
      return err
    }

  }

  
  


}
