import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  gotoNotes() {
    this.router.navigate(['/goto-notes']);
  }
  gotoTrash() {
    this.router.navigate(['/goto-trash']);
  }
  gotoArchive() {
    this.router.navigate(['/goto-archive']);
  }
}

