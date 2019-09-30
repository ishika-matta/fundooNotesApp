import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ConnectService } from '../../services/connect.service';
import { User } from '../forgot-password/forgot-password.model';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  userObj: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private svc: ConnectService) {
    this.svc.print("inside forgot password");
  }

  ngOnInit() {
  }
  EmailInvalidMessage() {
    if (this.email.hasError("required"))
      return "Email is required"

    if (this.email.hasError("email"))
      return "Enter a valid email"

  }
  onForgotPassword() {
   
    this.userObj = {
      email: this.email.value,
      service: "basic"
    }
    this.svc.forgotPassword(this.userObj);
  }

}
