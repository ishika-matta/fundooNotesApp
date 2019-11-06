import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/userServices/user.service';
import { User } from '../../models/login.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userObj: User = new User();
  result: any;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private router: Router, private auth: AuthService,
     private userService: UserService, private snackBar: MatSnackBar) {

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

  PasswordInvalidMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    if (this.password.hasError('minlength')) {
      return 'Password must be 8 characters';
    }
  }



  onLogin() {

    this.userObj = {
      email: this.email.value,
      password: this.password.value,
      service: 'advance'
    };
    this.result = this.userService.loginUser(this.userObj);

    this.userService.loginUser(this.userObj).subscribe((response: any) => {
      console.log(response);
      this.openSnackBar('Login successfull', 'Dismiss');
      localStorage.setItem('userId', response.userId);
      localStorage.setItem('id', response.id);
      localStorage.setItem('email', response.email);
      localStorage.setItem('firstName', response.firstName);
      localStorage.setItem('lastName', response.lastName);
      localStorage.setItem('pic', response.imageUrl);
     // this.auth.sendToken(response.userId);
       this.auth.sendToken(response.id);

      this.router.navigate(['/home']);
      console.log(response.userId);
    }, (error) => {
      console.log(error.statusText);
      this.openSnackBar('Login failed', 'Dismiss');
    });
  }

  openSnackBar(msg, action) {
    this.snackBar.open(msg, action, {
      duration: 2000})
  }
  }


