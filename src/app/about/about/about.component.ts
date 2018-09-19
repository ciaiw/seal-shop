import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TodoListService } from "../../todo-list.service";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: string;
  todo: todoList[];

  constructor(router: ActivatedRoute, private todoListService: TodoListService) { 
    router.paramMap.subscribe((paramMap: ParamMap) =>{
      if(paramMap.has("name")){
        const name = paramMap.get("name");
        this.name = name;
      }
    });
  }


  
  ngOnInit() {
    // this.todoListService.getTodoList().subscribe((res) => {
    //   this.todo = res;
    // }); 

  }

}

interface todoList {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}