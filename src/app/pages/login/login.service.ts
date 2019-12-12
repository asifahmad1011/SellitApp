import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Register } from "../register/register";  
@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
  Url :string;  
  token : string;  
  header : any;  
  

  constructor(private http : HttpClient) {   
  
    this.Url = 'http://localhost:3000/api/v1/'; 
    
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
    
  }  
  Login(model : any){  
    debugger;  
     var a =this.Url;
     console.log(a);  
  return this.http.post<any>(this.Url+'auth',model,{ headers: this.header}); 
   console.log(model);
   console.log(a); 
  }  
   StudentRecords(register:Register)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    console.log(register);
    //return this.http.post<Register[]>(this.Url + 'studentrecords/', register, httpOptions)  
   }  
}  