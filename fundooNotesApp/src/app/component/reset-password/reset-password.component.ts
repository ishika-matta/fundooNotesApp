import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ResetPassword } from '../../models/reset-password-model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userServices/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  userObj: any = new ResetPassword();
  token: string;
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.password.value)]);

  constructor(private userService: UserService, private routing: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    localStorage.setItem('token', this.token);
  }
  PasswordInvalidMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    if (this.password.hasError('minlength')) {
      return 'Password must be 8 characters';
    }

  }

  ConfirmPasswordInvalidMessage() {
    if (this.confirmPassword.hasError('required')) {
      return 'Password is required';
    }
    if (this.confirmPassword.hasError('minlength')) {
      return 'Password must be 8 characters';
    }
    if (this.confirmPassword.hasError('pattern')) {
      return 'Password did not match';
    }
  }

  onResetPassword() {
    this.userObj = {
      newPassword: this.password.value,
      // confirmPassword: this.confirmPassword.value,
      // service: "basic"
    };
    this.userService.resetPassword(this.userObj ).subscribe((response) => {
      //console.log(response);
    }, (error) => {
      console.log(error.statusText);
    });
  }

  }

