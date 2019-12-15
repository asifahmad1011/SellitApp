import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Sell } from "../sell/sell";
import { Category, Brand } from "./category";

@Injectable({
  providedIn: "root"
})
export class SellService {
  Url: string;
  serverUrl: string;
  brandUrl: string;
  token: string;
  header: any;
  constructor(private http: HttpClient) {
    this.Url = "http://localhost:3000/api/v1/category/";
    this.serverUrl = "http://localhost:3000/api/v1/product/";
    this.brandUrl = "http://localhost:3000/api/v1/brand/";

    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  CategoryByID() {
    return this.http.get<Category[]>(this.Url);
  }

  getAllBrands() {
    return this.http.get<Brand[]>(this.brandUrl);
  }

  postAd(sell) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<Sell>(`${this.serverUrl}add/`, sell, httpOptions);
  }
}