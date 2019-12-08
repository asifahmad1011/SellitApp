import { Component, OnInit } from '@angular/core';
import {RegisterRoutingModule} from './register-routing.module';    
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';   
import { LoginService } from '../login/login.service';   
import {Register} from './register';  
import { FormsModule } from '@angular/forms';  

    

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model : any={};   
  public baseUrl = "/api/auth"; 

  data = false;    
  UserForm: any;    
  massage:string;    
  constructor(private formbulider: FormBuilder,private loginService:LoginService) { }    
    
  ngOnInit() {    
    this.UserForm = this.formbulider.group({    
      first_name: ['', [Validators.required]],    
      last_name: ['', [Validators.required]],   
      email: ['', [Validators.required]],  
      password: ['', [Validators.required]],             
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.Register(user);  
    console.log(user);  
  }    
  Register(register:Register)    
  {    
  // this.loginService.StudentRecords(register).subscribe(    
  //   ()=>    
  //   {    
  //     this.data = true;    
  //     this.massage = 'Data saved Successfully';    
  //     this.UserForm.reset();    
  //   });    
  }    

}
