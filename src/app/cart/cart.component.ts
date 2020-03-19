import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CartService} from  '../cart.service';//服务

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //购物车属性
  items;
  //表单模型
  checkoutForm;

  constructor(private cartService :CartService,
              private  formBuilder :FormBuilder
             ) { 
               this.checkoutForm=this.formBuilder.group({
                 name:"",
                 address:""
               })
             }

  ngOnInit() {
    this.items=this.cartService.getItems();
  }
  //提交
  onSubmit(customerData){
    console.log(customerData);
    console.warn("你的订单将会被提交",customerData);
    //购物车清空
    this.items=this.cartService.cleanItems();
    //表单重置
    this.checkoutForm.reset();
  }

 

}