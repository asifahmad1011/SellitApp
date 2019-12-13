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
    sessionStorage.clear(); 
  }    
  login(){

    this.LoginService.Login(this.model).subscribe(data => {
        if(data.status=="sucessfull")
        {
          alert("You are now Logged in!");
          this.router.navigate(['./home/nine/']);
          //storing the session
          sessionStorage.setItem("matrikel_number", this.model.matrikel_number);
          sessionStorage.setItem("token", data.token);  

          //Getting the session
          //var matId = sessionStorage.getItem("matrikel_number")
          //var tok = sessionStorage.getItem("token")
        
          
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



