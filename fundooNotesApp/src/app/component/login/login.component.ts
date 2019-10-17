import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/userServices/user.service';
import { User } from '../../models/login.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';

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

  constructor(private router: Router, private auth: AuthService, private userService: UserService) {

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
    const options = {
      data: this.userObj,
      purpose: 'login',
    };
    this.result = this.userService.loginUser(this.userObj);

    this.userService.loginUser(this.userObj).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('id', response.id);
      localStorage.setItem('email', response.email);
      localStorage.setItem('firstName', response.firstName);
      localStorage.setItem('lastName', response.lastName);
      this.auth.sendToken(response.userId);
      this.router.navigate(['/goto-notes']);
      console.log(response.userId);
    }, (error) => {
      console.log(error.statusText);
    });
  }
  }


