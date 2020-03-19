import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CartService {
   items=[];
   p=0;
 

  addToCart(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  cleanItems(){
    this.items=[];
    return this.items;
  }
  totalPrice(){ 
    this.p=0;
    console.log(this.items);
    //遍历items数组，将数组中的价格取出来返回到页面
   for (let i = 0, len = this.items.length; i < len; i++) {
     this.p+=this.items[i].price;
  }
   return this.p;
  }


  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  constructor(private http :HttpClient) { }

}