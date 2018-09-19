import { Injectable } from '@angular/core';
import { Item } from './item';
import { cartItem } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itemList: cartItem;
  count: number = 0;
  total: number;

  constructor() { 
    this.itemList = {};
   
   
  }

  getItems(){
    return this.itemList;
  }

  addItems(item: Item){
    if(this.itemList[item.id]){
      this.itemList[item.id].amount++;
      this.itemList[item.id].subTotal = this.itemList[item.id].amount * this.itemList[item.id].item.price;
      
    }else{
      this.itemList[item.id] = {
        item: item,
        amount: 1,
        subTotal: item.price
      }
     
    }
    
  this.count ++;
  }



 
}
