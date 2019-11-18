import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DataService } from 'src/app/services/dataServices/data.service';
import { ProductCartService } from 'src/app/services/productCartServices/product-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  view: any;
  cartid: any;
  productId: any;
  isEditable = false;
  address = new FormControl('', [Validators.required]);



  constructor(private _formBuilder: FormBuilder, private dataService: DataService,
    private productCartService: ProductCartService) { }

  ngOnInit() {
    this.getCartId();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onOrder(){
    
    const obj = {
      'cartId': this.cartid,
      'address': this.address,
    };
      this.productCartService.placeOrder(obj).subscribe((response: any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

  getCartId(){
    this.productCartService.cartId().subscribe((response: any) => {
      console.log(response.data[0].id);
      this.cartid=response.data[0].id;
      this.productId=response.data[0].productId;
    }, (error) => {
      console.log(error);
    });
  }
  }
