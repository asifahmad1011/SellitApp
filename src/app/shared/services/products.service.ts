import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../classes/product';
import { BehaviorSubject, Observable, of, Subscriber} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';


@Injectable()

export class ProductsService {
  
  public baseUrl = "http://localhost:3000/api/v1/product";
  public currency : string = 'EUR';
  public catalogMode : boolean = false;
  public result: any;

  
  public observer   :  Subscriber<{}>;

  // Initialize 
  constructor(private httpClient: HttpClient) { }

  // Observable Product Array
  private products(): Observable<Product[]> {

        return this.httpClient.get(this.baseUrl).pipe(
          map(response => {
            console.log("Response:",response)
            return this.result = response["products"];

          })
        );
    }

  // Get Products
  public getProducts(): Observable<Product[]> {
    // console.log();
    return this.products();
  }

  // Get Products By Id
  public getProduct(product_id: number): Observable<Product> {
    // console.log("Hey, product id is:",product_id);
    
    return this.products().pipe(map(items => { return items.find((item: Product) => { 
      // console.log("Item:",item);
      return item.id === product_id; }); }));
  }

     // Get Products By category
     public getProductByCategory(category: number): Observable<Product[]> {
      return this.products().pipe(map(items => 
         items.filter((item: Product) => {
           if(category >= 1)
              return item
           else
              return item.category; 
          
         })
       ));
    }
}