import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { LoginService } from './login.service';    
 import { FormsModule } from '@angular/forms';    
import { HttpHeaders } from '@angular/common/http';

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
    
  public sessionStorageItem(matrikel_number: string): string {
    console.log("number", matrikel_number);
    return sessionStorage.getItem(matrikel_number);
}

  ngOnInit() {      
    localStorage.clear(); 
  }    


  login(){
    this.LoginService.Login(this.model).subscribe(data => {
        if(data.status=="sucessfull")
        {
          alert("You are now Logged in!");
          this.router.navigate(['./home/profile/']);
          // storing the session
          localStorage.setItem("matrikel_number", this.model.matrikel_number);
          localStorage.setItem("token", data.token);  
          console.log("mat",this.model.matrikel_number);
          console.log(localStorage);
          
         
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

  getuser(): any {
    var user = localStorage.getItem('matrikel_number')? JSON.parse(localStorage.getItem('matrikel_number')):[];
}

 }



