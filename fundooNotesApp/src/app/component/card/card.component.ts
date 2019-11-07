import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataServices/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onChoice(data){
    console.log('card choice', data)
    this.dataService.changeMessage(data);
    this.router.navigate(['/register']);
  }
}
