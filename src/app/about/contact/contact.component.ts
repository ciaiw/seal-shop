import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string ;

  constructor(router: ActivatedRoute) { 
    router.paramMap.subscribe((paramMap: ParamMap) =>{
      if(paramMap.has("name")){
      
        this.name = "test"
      }
    });
  }

  ngOnInit() {
  }

}
