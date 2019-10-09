import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/forgot-password.model';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  userObj: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private userService: UserService) {
    
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
    let options = {
      data: this.userObj,
      purpose: 'reset',
    }
   this.userService.postWithoutToken(options).subscribe((response) => {
      console.log(response);
    },(error)=>{
      console.log(error.statusText);
    })
  }
  
  }


