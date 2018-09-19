import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../item";
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, ParamMap } from "@angular/router";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() listItem: Item[]

  constructor(ProductsService: ProductsService, private cartService: CartService, private router: ActivatedRoute) {
    //this.listItem = ProductsService.itemList;

    ProductsService.getAll().subscribe({
      next: (product) =>{
        
        router.queryParamMap.subscribe({
          next: (queryParamMap: ParamMap) => {
            if(queryParamMap.has("category")){
              const category = queryParamMap.get("category");
              this.listItem = product.filter((item) =>{
                return item.category == category;
              }); 
              
            }else{
              this.listItem = product;
            }
          },
        });

      }
    });

   }

  ngOnInit() { //เรียกตอน component ถูกสร้างในครั้งแรกครั้งเดียว
    
  }

  addToCart(item: Item){
    this.cartService.addItems(item);
  }















  ngOnChange() { //เรียกตอนมีการเปลี่ยนแปลงบางอย่าง component
  }
  ngDoCheck(){ // ถูกเรียกตอน มีการยุ่งกับ event ที่ angular ไม่รู้จัก จะมาทำงานที่เมธอดนี้
  }

  ngAfterContentInit(){} //หลังจากที่มีการสร้าง content แล้ว
  

  ngAfterContentChecked(){}

  ngAfterViewInit(){} //ทำงานหลังจากที่มีการสร้างหน้า view แล้ว
  
  

  ngAfterViewChecked(){}

  ngOnDestroy(){}
}

