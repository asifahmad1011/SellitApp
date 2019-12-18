import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ToastrService } from "ngx-toastr";
import { Products } from "../classes/product";
import { Category } from "../classes/category";
import { BehaviorSubject, Observable, of, Subscriber } from "rxjs";
import { map, filter, scan } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";


//import { HttpClient } from 'selenium-webdriver/http';
//She



let abcd =
  JSON.parse(localStorage.getItem("https://localhost:3000/api/v1/product")) ||
  [];
localStorage.setItem("data", JSON.stringify(name));
console.log("sample:", name);

@Injectable()
export class ProductsService {
  //Accessing the server address+api/products(she)
  private serverUrl = "http://localhost:3000/api/v1/product";

  url = "http://localhost:3000/api/v1/category";
  product: any;
  public currency: string = "EUR";
  public catalogMode: boolean = false;
  header: any;

  //public compareProducts : BehaviorSubject<Product[]> = new BehaviorSubject([]);
  //public observer   :  Subscriber<{}>;

  // constructor(private http: Http,private toastrService: ToastrService){
  // this.compareProducts.subscribe(products => products = products);
  //}

  
  //Initializing the httpClient she
  constructor(
    private httpclient: HttpClient,
    private http: Http,
    private toastrService: ToastrService
    
  ) {
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  // Observable Product Array
  // Observable Product Array

  // public products(): Observable<Products[]> {
  //   return this.httpclient.get(this.serverUrl).pipe(
  //     map((res:any) => {
  //       console.log("API Response:", res);
  //     return this.product;
  //     })
  //   )}

  //she
  public getProductById(id: number) {
    return this.httpclient.get(this.serverUrl + "/id/" + id);
  }

  //she
  public getProductByCat(catid: number){
    return this.httpclient.get<Products[]>(this.serverUrl + "/getProductsByCategory/" + catid);
  }

  private products(): Observable<Products[]> {
    return this.http
      .get("assets/data/products.json")
      .map((res: any) => res.json());
  }

  // Get Products
  public getProducts() {
    return this.httpclient.get<Products[]>(`${this.serverUrl}`);
  }

  
  // Get Category
  public Category() {
    return this.httpclient.get<Category[]>(`${this.url}`);
  }

  // // Get Products By Id
  // public getProduct(product_id: number) :Observable<Products> {
  //   return this.products().pipe(map(items => { return items.find((item: Products) => { return item.product_id === product_id; }); }));
  // }

  // Get Products By category
  public getProductByCategory(category_id: number): Observable<Products[]> {
    return this.getProducts().pipe(
      map(items =>
        items.filter((item: Products) => {
          if (category_id === 1) return item;
          else return item.category_id;
        })
      )
    );
  }
}