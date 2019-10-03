import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ConnectService } from '../../services/connect.service';
import { User } from '../login/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userObj: User = new User();
  result:any;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private svc: ConnectService) { 
    
  }

  ngOnInit() {
    this.svc.print("inside login");
  }

  EmailInvalidMessage() {
    if (this.email.hasError("required"))
      return "Email is required"

    if (this.email.hasError("email"))
      return "Enter a valid email"
  }

  PasswordInvalidMessage() {
    if (this.password.hasError("required")) {
      return "Password is required"
    }
    if (this.password.hasError("minlength")) {
      return "Password must be 8 characters"
    }
  }

  

  onLogin() {
   
    this.userObj = {
      email: this.email.value,
      password: this.password.value,
      service: "basic"
    }
    let options = {
      data: this.userObj,
      purpose: 'login',
    }
    this.result=this.svc.postWithoutToken(options);

    this.svc.postWithoutToken(options).subscribe((response) => {
      console.log(response);
    },(error)=>{
      console.log(error.statusText);
    })
  }
  }


