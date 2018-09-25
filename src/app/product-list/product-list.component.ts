import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../item";
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Customer } from '../customer';
import { OrderList } from '../order-list';
import { modalAlert } from "../modal-alert/modal-alert.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() listItem: Item[];
  @Input() cusList: OrderList;
  @Input() count: string;
 orderNo: string = "";
 private modalAlert: modalAlert;

  constructor(private productsService: ProductsService, private cartService: CartService, private router: ActivatedRoute) {
    //this.listItem = ProductsService.itemList;

    // productsService.getAll().subscribe({
    //   next: (product) =>{
        
    //     router.queryParamMap.subscribe({
    //       next: (queryParamMap: ParamMap) => {
    //         if(queryParamMap.has("category")){
    //           const category = queryParamMap.get("category");
    //           this.listItem = product.filter((item) =>{
    //             return item.category == category;
    //           }); 
              
    //         }else{
    //           this.listItem = product;
    //         }
    //       },
    //     });

    //   }
    // });
    // productsService.getCustomer().subscribe({
    //     next: (cus) =>{
    //       this.cusList = cus.orderWaitingList;
    //       this.count = cus.orderWaitingCount;
    //       console.log('count : ', this.count);
    //     },
    //     error: (err) =>{
    //       console.log('err ', err)
    //     },
           
    // });

   

  
   }

  ngOnInit() { //เรียกตอน component ถูกสร้างในครั้งแรกครั้งเดียว
    this.getData();
  }


  getData(){
    this.productsService.getQueryCustomer(this.orderNo).subscribe({
      next: (cus) =>{
        if(cus.orderWaitingCount == "0"){
        //  this.modalAlert.openDialog("test alert");
        }else{
          this.cusList = cus.orderWaitingList;
        }
        
      },
      error: (err) =>{
        console.log('err ', err);
      },
      complete: () =>{
      },
         
  });
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

