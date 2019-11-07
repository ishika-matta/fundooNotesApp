import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  url: any;
  auth = false;

  constructor(private httpSvc: HttpService) { }

  cartId() {
    this.url = 'productcarts/myCart';
    this.auth = true;
    return this.httpSvc.getCall(this.url, this.auth);
  }

  placeOrder(data) {
    this.url = 'productcarts/placeOrder';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);
  }

  addtoCart(data) {
    this.url = 'productcarts/addToCart';
    this.auth = true;
    return this.httpSvc.postCall(data, this.url, this.auth);

  }
}
