import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { CProducts } from '../classes/Cproducts';
import { BehaviorSubject, Observable, of, Subscriber} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
//import { HttpClient } from 'selenium-webdriver/http';
//She
import { HttpClient } from '@angular/common/http';



@Injectable()

export class CproductsService {

  //Accessing the server address+api/products(she)
  private serverUrl = "http://localhost:3000/api/v1/product";
  
  public currency : string = 'EUR';
  public catalogMode : boolean = false;
  
  //public compareProducts : BehaviorSubject<Product[]> = new BehaviorSubject([]);
  //public observer   :  Subscriber<{}>;

//  constructor(private http: Http,private toastrService: ToastrService){ 

//  }

  // Initialize 
  //Initializing the httpClient she
  constructor(private httpclient:HttpClient,private http: Http,private toastrService: ToastrService) {
  } 
     

  // Observable Product Array
  private products(): Observable<CProducts[]> {
     return this.http.get(this.serverUrl).pipe(map(res => { 
        console.log(res);
        return res.json()  
        
  }));
  }

  //she
  public getProductById(id: number)
  {
    return this.httpclient.get(this.serverUrl + "/id/" + id);
  }

  // Get Products
  public getProducts(): Observable<CProducts[]> {
    return this.products();
  }

  // Get Products By Id
  public getProduct(id: number) :Observable<CProducts> {
    return this.products().pipe(map(items => { return items.find((item: CProducts) => { 
        console.log(item);
        return item.product_id === id; }); }));
  }

   // Get Products By category
  public getProductByCategory(category_id: string): Observable<CProducts[]> {
    return this.products().pipe(map(items => 
       items.filter((item: CProducts) => {
         if(category_id == '1')
            return item
         else
            return item.category_id; 
        
       })
     ));
  }

}