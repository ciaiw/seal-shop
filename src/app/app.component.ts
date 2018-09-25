import { Component, Input } from '@angular/core';
import { ProductsService } from "src/app/products.service";
import { CartService } from './cart.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { modalAlert } from './modal-alert/modal-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seal shop';
  listItem = [
    {id: "1", title: "รองเท้า", price: 299, imageUrl: "https://5.imimg.com/data5/CP/FO/MY-38660000/ladies-shoe-500x500.jpg", category: "รองเท้า"},
    {id: "2", title: "เสื้อ", price: 399, imageUrl: "https://3.imimg.com/data3/SO/SJ/MY-1164718/ladies-formal-shirts-250x250.jpg", category: "เสื้อ"},
    {id: "3", title: "กระเป๋า", price: 499, imageUrl: "https://res.weloveshopping.com/918710/w_450,h_450,c_thumb/1e25d8903d875035b13d93dbc3b2fa2b/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9B%E0%B9%8B%E0%B8%B2%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%99%E0%B8%B2%E0%B8%A226.jpg", category: "กระเป๋า"},
  ];

  // listItem = [
  //   {id: "1", title: "รองเท้า", price: 299, imageUrl: "", category:"รองเท้า"},
  //   {id: "2", title: "เสื้อ", price: 399, imageUrl: "", category:"เสื้อ"},
  //   {id: "3", title: "กระเป๋า", price: 499, imageUrl: "", category:"กระเป๋า"},
  // ];
  toggleCart = false;
  cartItemCount;
 test: string = "ciaiw";
 
  constructor(ProductsService: ProductsService, public cartService: CartService){
    ProductsService.itemList = this.listItem;
 // this.cartItemCount = CartService.count;


  }

  ngOnInit(){
    this.cartItemCount = this.cartService.count;
  }


}
