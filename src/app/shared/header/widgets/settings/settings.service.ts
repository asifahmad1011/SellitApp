import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable, of, empty } from 'rxjs';
import { map } from "rxjs/operators";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public baseUrl = "/api/v1/product/";
  public searchResults: any;

  constructor(private httpClient: HttpClient) { }


  //makes the HTTP request to get the resources and returns the response as observable;  
  public searchEntries(product): Observable<any>{
    if (product === "" ){
      console.log("Not defined");
      return of(null);
      //return empty();
    }else{
      let params = {product : product}
      console.log(params);
      return this.httpClient.get(this.baseUrl + product).pipe(
        map(response => {
          console.log(response)
          return this.searchResults = response["products"];
        })
      );
    }
    
  }

  //returns the response for the first method
  public _searchEntries(product){
    return this.searchEntries(product);
  }
}
