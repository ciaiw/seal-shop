import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
// import "../../node_modules/rxjs/add/operator/map";
// import "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: Http) { }

  getTodoList(){
    // return this.http.get("https://jsonplaceholder.typicode.com/todos").map((res) => res.json());
  }
}
