import { Injectable } from '@angular/core';
import { Item } from './item';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { OrderList } from "./order-list";
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { Customer } from "./customer";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 // private customerUrl :string = 'http://10.252.160.159:8280/TDMWSWeb/resteasy/SO_SERVICE/TDM/V1/mychannel/omniQueryWaitingTransfer'; // URL to web api
 private customerUrl :string = 'api/TDMWSWeb/resteasy/SO_SERVICE/TDM/V1/mychannel/omniQueryWaitingTransfer'; // URL to web api
 //private customerUrl :string = '/api/WaService4test/services/MobileService.php?req=getAllMobile';
  itemList: Item[];
  requestData = [];
 orderList: Customer[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]> {
    return this.http.get("http://localhost:5000/product") as Observable<Item[]>;
  }

  
  getCustomer(): Observable<Customer> {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;'
      //  'Access-Control-Allow-Origin':'*'
      }) 
    };
    let params = {
      "locationCode": "1100",
      "queryOption": "L"
    };
   
     return this.http.post(this.customerUrl, params,httpOptions) as Observable<Customer>;

     
    // return this.http.post<OrderWaitingList>(this.customerUrl,params,httpOptions)

    // .pipe(
    //   catchError(this.handleError)
    // )

  }


  getQueryCustomer(orderNo:string): Observable<Customer> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;'
      //  'Access-Control-Allow-Origin':'*'
      }) 
    };

    let queryOption: string = "";
    if(orderNo == null || orderNo == ""){
      queryOption = "L";
    }else{
      queryOption = "Q";
    }

    let params = {
      "locationCode": "1100",
      "queryOption": queryOption,
      "orderNo": orderNo
    };

     return this.http.post(this.customerUrl, params, httpOptions) as Observable<Customer>;
    
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
