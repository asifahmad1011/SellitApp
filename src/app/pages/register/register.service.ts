import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Register } from "../register/register";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  Url: string;
  token: string;
  header: any;
  constructor(private http: HttpClient) {

    this.Url = "http://localhost:3000/api/v1/";

    this.Url = "/api/v1/";


    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  StudentRecordByID(id): Observable<Register[]> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.get<Register[]>(
      `${this.Url}studentrecord/${id}`,
      httpOptions
    );
  }
  postUser(register) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<Register>(`${this.Url}users/`, register, httpOptions);
  }
}
