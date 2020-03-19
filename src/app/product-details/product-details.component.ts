import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from "../products";
import {CartService} from '../cart.service';//购物车服务

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //属性
   product;
  constructor( private route:ActivatedRoute,
  private cartService:CartService) { 
  }
  buy(product){
    window.alert(product.name+'加入购物车');
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product=products[+params.get('productId')];
    })
  }

}