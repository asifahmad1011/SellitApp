import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ToastrService } from "ngx-toastr";
import { HttpHeaders } from "@angular/common/http";
import { Category } from "./category";
import { BehaviorSubject, Observable, of, Subscriber } from "rxjs";
import { map, filter, scan } from "rxjs/operators";
import "rxjs/add/operator/map";
//import { HttpClient } from 'selenium-webdriver/http';
//She
import { HttpClient } from "@angular/common/http";



@Injectable()
export class CollectionService {
  //Accessing the server address+api/products(she)
  private serverUrl = "http://localhost:3000/api/v1/product/getProductsByCategory/";
  product: any;
  public currency: string = "EUR";
  public catalogMode: boolean = false;

  constructor(
    private httpclient: HttpClient,
    private http: Http,
    private toastrService: ToastrService
  ) {}


  public getCategoryById(category_id): Observable<Category[]> {
    const httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };
    return this.httpclient.get<Category[]>(this.serverUrl + 2, httpOptions);
  }

}