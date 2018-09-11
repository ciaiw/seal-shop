import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";
import { CartService } from '../cart.service';
import { cartItem } from '../cart';
import { FormControl, Validators ,FormArray, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItem: cartItem;
  cartItemsKeys : string[];
 
  amountArrayControl: FormArray;
  formGroup: FormGroup;
  // @Output() totalPrice = new EventEmitter();

  public totalPrice: number;


  constructor(public cartService: CartService, formBuilder: FormBuilder) { 
    this.cartItem = cartService.getItems();
    this.cartItemsKeys = Object.keys(this.cartItem);

    this.amountArrayControl = new FormArray([], Validators.required);

    this.formGroup = new FormGroup({
      cartList: this.amountArrayControl
    });
   
    // this.formGroup =  formBuilder.group({
    //     cartList: this.amountArrayControl,
    //     select: ['', Validators.required]
    // });

    // this.formGroup =  formBuilder.group({
    //   cartList: formBuilder.array([], Validators.required),
    // });

    this.formGroup.valueChanges.subscribe({
      next: (data) => {
        this.totalPrice = data.cartList.reduce((total, amount, index) =>{
          const itemId = this.cartItemsKeys[index];
          const itemInCart = this.cartItem[itemId];
         return (amount * itemInCart.item.price) + total;
        }, 0);
      },
      error: (err) => {},
      complete: () =>{}
    });
    
    this.cartItemsKeys.forEach((cartItemsKeys) =>{
      this.amountArrayControl.push(new FormControl(this.cartItem[cartItemsKeys].amount,[Validators.min(1), Validators.required]));
   });

   }


   removeItems(itemId: string, index: number){
      this.cartItemsKeys.splice(index, 1);
      this.amountArrayControl.removeAt(index);
      delete this.cartItem[itemId];
  }


  ngOnInit() {

  }


}

