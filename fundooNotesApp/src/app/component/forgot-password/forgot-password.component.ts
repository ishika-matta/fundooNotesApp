import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/userServices/user.service';
import { User } from '../../models/forgot-password.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  userObj: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private userService: UserService,  private snackBar: MatSnackBar) {

  }

  ngOnInit() {

  }
  EmailInvalidMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }

    if (this.email.hasError('email')) {
      return 'Enter a valid email';
    }

  }
  onForgotPassword() {

    this.userObj = {
      email: this.email.value,
      service: 'advance'
    };
   this.userService.forgotPassword(this.userObj).subscribe((response) => {
      console.log(response);
      this.openSnackBar('Reset Password link sent', 'Dismiss');
    }, (error) => {
      console.log(error.statusText);
      this.openSnackBar('Error in sending Reset Password link', 'Dismiss');
    });
  }

  openSnackBar(msg, action) {
    this.snackBar.open(msg, action, {
      duration: 2000})
  }

  }


