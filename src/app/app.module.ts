import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'; 
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TitlePipe } from './title.pipe';
import { BgColorDirective } from './bg-color.directive';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material";
import { modalAlert } from './modal-alert/modal-alert.component';

@NgModule({
  declarations: [ //ประกาศใช้ componen, ShoppingCartComponentt
    AppComponent,
    ShoppingCartComponent,
    TitlePipe,
    ProductListComponent,
    SummaryComponent,
    BgColorDirective,
    modalAlert
  ],
  imports: [ //import TS
    BrowserModule,
    RouterModule.forRoot([
      // { path:"", component: ProductListComponent, children:[{
      //    path:"cart", component: ShoppingCartComponent 
      // }] },

      { path:"", component: ProductListComponent},
      {path:"cart", component: ShoppingCartComponent },
      {path:"summary", component: SummaryComponent },
      { path:"about", loadChildren: "./about/about.module#AboutModule" }, //format pathmodule/file name module#nameModule 
    ]),
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent] //default component จะประกาศใช้เฉพาะตอนแรกไม่จำเปนต้องประกาศทุก module
})
export class AppModule { } 

