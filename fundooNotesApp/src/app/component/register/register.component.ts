import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userServices/user.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../models/register.model';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/services/dataServices/data.service';
import { ProductCartService } from 'src/app/services/productCartServices/product-cart.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  choices: string[] = ['Advance', 'Basic'];
  cardChoice: any;

  userObj: User;
  result: any;
  message:any;
  cart:any;
  productId:any;

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  FirstNameInvalidMessage() {
    if (this.firstName.hasError('required')) {
      return 'First Name is required';
    }
  }

  LastNameInvalidMessage() {
    if (this.lastName.hasError('required')) {
      return 'Last Name is required';
    }
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


  constructor(private userService: UserService, private snackBar: MatSnackBar,
    private dataService: DataService, private productCartService: ProductCartService) {

  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe((res) => {
    this.cardChoice=res;
    this.onGetCartId(this.cardChoice);
    });
  }

  onGetCartId(cardChoice){
    console.log('card choice on get card', cardChoice);
    if(cardChoice=='advance'){
    this.productId= "5bfe361553c3df0040d852a6";}
    else{ //basic
    this.productId= "5bfe362b53c3df0040d852a7";}

    let cartObj={
      "productId":this.productId
    }

    this.productCartService.addtoCart(cartObj).subscribe((response:any) => {
      console.log(response);
      this.cart=response.data.details.id;
      console.log('cart idddd', this.cart);
    }, (error) => {
      console.log(error.statusText);
    });

  }

  onRegister() {
    

    this.userObj = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      service: this.cardChoice,
      cartId: this.cart,
    };
    console.log("card choiceeeeeeee", this.userObj);

    this.result = this.userService.registerUser(this.userObj);

    this.userService.registerUser(this.userObj).subscribe((response) => {
      console.log(response);

      this.openSnackBar('User registered successfully', 'Dismiss');
    }, (error) => {
      console.log(error.statusText);
    });
  }
  openSnackBar(msg, action) {
    this.snackBar.open(msg, action, {
      duration: 2000})
  }
}

