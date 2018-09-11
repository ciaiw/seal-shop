import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { cartItem } from '../cart';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { log } from 'util';
import { Item } from '../item';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  cartItem: cartItem;
  cartItemsKeys : string[];
  shoppingCart: ShoppingCartComponent;

 totalPrice : number;

//  @ViewChild(ShoppingCartComponent) child;

  constructor(cartService: CartService) { 
    this.cartItem = cartService.getItems();
    this.cartItemsKeys = Object.keys(this.cartItem);


    

      //  this.cartItemsKeys.forEach((item, total) =>{
  //     total = this.cartItem[item].amount * this.cartItem[item].item.price;
  //   }); 
  //   this.cartItemsKeys.forEach(function (e, index){
  //    this.item = Object.keys(this.cartItem[e].amount);
  //  });

   //console.log('item : ', this.item);
    // this.totalPrice = this.cartItemsKeys.reduce((total, index) =>{
    //   const itemId = this.cartItemsKeys[index];
    //   const itemInCart = this.cartItem[itemId];
    //  return (itemInCart.amount * itemInCart.item.price) + total;
    // }, 0);
    // console.log('price : ', this.totalPrice)


  //   this.cartItemsKeys.forEach(function (e, index){
  //     console.log('total : ', this.cartItem[e].amount * this.cartItem[e].item.price)

  //     return this.cartItem[e].amount * this.cartItem[e].item.price;
     
  //  });

   


    
  }

  ngOnInit() {
  
    
  }

}
