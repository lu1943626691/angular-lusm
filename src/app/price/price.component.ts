import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
   totalPrices;
  constructor(private cartService:CartService) { }

  ngOnInit() {
   this.totalPrices=this.cartService.totalPrice();
  }
  

}