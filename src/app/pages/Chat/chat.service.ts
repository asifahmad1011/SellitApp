import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Chat} from "./chat";
import { send } from "./send";
import { UserMessages } from "./chat";
import { map, filter, scan } from 'rxjs/operators';


var a= localStorage.getItem('matrikel_number');
console.log("Local:",a);

@Injectable({
  providedIn: "root"
})

export class ChatService {
  Url: string;
  Url1: string;
  token: string;
  header: any;
  data: any;
  serverUrl: string;
 
  constructor(private http: HttpClient) {

    this.Url = "http://3.134.103.215:3000/api/v1/chat/"; 
    this.Url1 = "http://3.134.103.215:3000/api/v1/chat/sendMessage/";
    this.serverUrl = "http://3.134.103.215:3000/api/v1/chat/getAllMessages/"; 

    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  public getProductsUser() {
    return this.http.get<Chat[]>(`${this.Url}${a}`);
    }

    public getallMessages(UserMessages) {
      const httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };
      return this.http.post<UserMessages[]>(`${this.serverUrl}`, UserMessages, httpOptions);
      }

      SendMsg(send) {
        const httpOptions = {
          headers: new HttpHeaders({ "Content-Type": "application/json" })
        };
        return this.http.post<send>(`${this.Url1}`, send, httpOptions); }
} 