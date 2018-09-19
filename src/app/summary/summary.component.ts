import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { cartItem } from '../cart';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  cartItem: cartItem;
  cartItemsKeys : string[];
  


//  @ViewChild(ShoppingCartComponent) child;

  constructor(private cartService: CartService) { 
    this.cartItem = cartService.getItems();
    this.cartItemsKeys = Object.keys(this.cartItem);
 
  }

  ngOnInit() {
  
    
  }

}
