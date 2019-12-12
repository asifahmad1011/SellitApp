import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { LoginService } from './login.service';    
 import { FormsModule } from '@angular/forms';    

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model : any={};   
  public baseUrl = "http://localhost:3000/api/v1/"; 
    
  errorMessage:string;    
  constructor(private router:Router,private LoginService:LoginService) { }    
    
    
  ngOnInit() {    
    sessionStorage.removeItem('matrikel_number');    
    sessionStorage.clear(); 
    console.log("Session:",sessionStorage);   
  }    
  login(){
    debugger;
    this.LoginService.Login(this.model).subscribe(data => {
      this.model = data;
        // console.log("This is Reality", data);
        if(data.status=="sucessfull")
        {
          alert("You are now Logged in!");
          this.router.navigate(['./home/nine/']);
          console.log(this.router);
          debugger;
         
        }
        else{
          alert("Incorrect Username or Password!");
          this.errorMessage = data.Message;
          // console.log(this.errorMessage);
        }
      },
      error => {
        this.errorMessage = error.message;
        // console.log(this.errorMessage);
      });
  };
 }



