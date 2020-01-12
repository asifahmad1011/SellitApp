import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Sell } from "../sell/sell";
import { Dashboard, ProductSatus, updateProfile } from "./dashboard";
import { map, filter, scan } from 'rxjs/operators';


var a= localStorage.getItem('matrikel_number');
console.log("Local:",a);

@Injectable({
  providedIn: "root"
})

export class DashboardService {
  Url: string;
  urlprofile: string = "http://localhost:3000/api/v1/users";
  UrlStatus: String = "http://localhost:3000/api/v1/product/changeProductStatus";
  token: string;
  header: any;
  data: any;
 
  constructor(private http: HttpClient) {
    this.Url = "http://3.134.103.215:3000/api/v1/product/userproduct/"; 
    
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }


  profileUpdate(id): Observable<updateProfile[]> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.get<updateProfile[]>(
      // this.urlprofile,
      `${this.urlprofile}/${id}`,
      httpOptions
    );
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

    updateUser(userprofile,id) {
      const httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };
      return this.http.put<any>(`${this.urlprofile}/update/${id}`, userprofile, httpOptions);
    }

}
