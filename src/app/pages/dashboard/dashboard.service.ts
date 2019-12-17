import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Sell } from "../sell/sell";
import { Dashboard, ProductSatus } from "./dashboard";
import { map, filter, scan } from 'rxjs/operators';


var a= localStorage.getItem('matrikel_number');
console.log("Local:",a);

@Injectable({
  providedIn: "root"
})

export class DashboardService {
  Url: string;
  UrlStatus: String = "http://localhost:3000/api/v1/product/changeProductStatus";
  token: string;
  header: any;
  data: any;
 
  constructor(private http: HttpClient) {
    this.Url = "http://localhost:3000/api/v1/product/userproduct/"; 
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  public getProductsUser() {
    return this.http.get<Dashboard[]>(`${this.Url}${a}`);
    }

  public changeStatus(Dashboard) {
      const httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };
      return this.http.post<ProductSatus>(`${this.UrlStatus}`, Dashboard, httpOptions);
    }

}
