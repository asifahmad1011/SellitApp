import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../classes/product';
import { BehaviorSubject, Observable, of, Subscriber} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
//import { HttpClient } from 'selenium-webdriver/http';
//She
import { HttpClient } from '@angular/common/http';

// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("compareItem")) || [];

@Injectable()

export class ProductsService {

  //Accessing the server address+api/products(she)
  private serverUrl = "http://localhost:3000/api/v1/product";
  
  public currency : string = 'EUR';
  public catalogMode : boolean = false;
  
  //public compareProducts : BehaviorSubject<Product[]> = new BehaviorSubject([]);
  //public observer   :  Subscriber<{}>;

 // constructor(private http: Http,private toastrService: ToastrService){ 
 // this.compareProducts.subscribe(products => products = products);
 //}

  // Initialize 
  //Initializing the httpClient she
  constructor(private httpclient:HttpClient,private http: Http,private toastrService: ToastrService) {} 
     

  // Observable Product Array
  private products(): Observable<Product[]> {
     return this.http.get('assets/data/products.json').map((res:any) => res.json())
     //return this.http.get(this.serverUrl).map((res:any) => res.json());
  }

  //she
  public getProductById(id: number)
  {
    return this.httpclient.get(this.serverUrl + "/id/" + id);
  }

  // Get Products
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  // Get Products By Id
  public getProduct(id: number) :Observable<Product> {
    return this.products().pipe(map(items => { return items.find((item: Product) => { return item.id === id; }); }));
  }

   // Get Products By category
  public getProductByCategory(category: string): Observable<Product[]> {
    return this.products().pipe(map(items => 
       items.filter((item: Product) => {
         if(category == 'all')
            return item
         else
            return item.category === category; 
        
       })
     ));
  }

}