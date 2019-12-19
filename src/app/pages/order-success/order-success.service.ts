import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Sell } from "../sell/sell";
import { Success } from "./success";
import { map, filter, scan } from 'rxjs/operators';


var a= localStorage.getItem('matrikel_number');
console.log("Local:",a);

@Injectable({
  providedIn: "root"
})

export class OrderService {
  Url: string;
  token: string;
  header: any;
  data: any;
 
  constructor(private http: HttpClient) {
    this.Url = "http://3.134.103.215:3000/api/v1/product/recentproduct/"; 
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  public getdetails() {
    return this.http.get<Success[]>(`${this.Url}${a}`);
    }

}
