import { Component } from '@angular/core';
import { ConnectService } from '../app/services/connect.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundooNotesApp';

  constructor(private svc:ConnectService, private http:HttpClient){
    this.svc.print("service working");

  }

  ngOnInit(){
  }
}
