import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { TodoListService } from "../todo-list.service";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([ //forChild สำหรับเรียก module ย่อย
      { path: ":name", component : AboutComponent},
      { path: "contact", component : ContactComponent},
    ]),
    HttpModule
  ],
  declarations: [AboutComponent, ContactComponent]
})
export class AboutModule { }
