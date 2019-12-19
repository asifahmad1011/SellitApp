import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { chat } from "./chat";


@Injectable({
  providedIn: "root"
})
export class ProductSidebarService {
  Url: string;
  serverUrl: string;
  brandUrl: string;
  token: string;
  header: any;
  constructor(private http: HttpClient) {
    this.Url = "http://3.134.103.215:3000/api/v1/chat/sendMessage/";

    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }


  SendMsg(sell) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<chat>(`${this.Url}`, sell, httpOptions);
  }
}