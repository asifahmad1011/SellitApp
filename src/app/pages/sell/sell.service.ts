import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Sell } from "../sell/sell";
import { Category } from "./category";

@Injectable({
  providedIn: "root"
})
export class SellService {
  Url: string;
  serverUrl: string;
  token: string;
  header: any;
  constructor(private http: HttpClient) {
    this.Url = "http://localhost:3000/api/v1/category";
    this.serverUrl ="http://localhost:3000/api/v1/product/";

    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  CategoryByID(category) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.get<Category[]>(
      `${this.Url}`,httpOptions);
  }
  postAd(sell) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<Sell>(`${this.serverUrl}add/`, sell, httpOptions);
  }

}
