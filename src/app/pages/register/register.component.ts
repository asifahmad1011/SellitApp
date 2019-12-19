import { Component, OnInit } from "@angular/core";
import { RegisterRoutingModule } from "./register-routing.module";
import { Router} from '@angular/router';

import { Observable } from "rxjs";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Register } from "./register";
import { RegisterService } from "./register.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  model: any = {};
  public users = [];

  data = false;
  registerForm: FormGroup;
  submitted = false;
  massage: string;
  constructor(
    private formbulider: FormBuilder,
    private RegisterService: RegisterService,
    public router:Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formbulider.group({
      matrikel_number: ["", [Validators.required]],
      username: ["", [Validators.required]],
      First_Name: ["", [Validators.required]],
      Last_Name: ["", [Validators.required]],
      Email: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    });
  }

  Register() {
    const userdata = this.registerForm.value;
    //console.log(userdata.matrikel_number);
    this.RegisterService.StudentRecordByID(userdata.matrikel_number).subscribe(
      data => {
        const dbData = Object.values(data);

        console.log(dbData);

        const DBForm = { dbData, userdata, role_id: 0 };
        this.registerForm.reset();

        const pdata = {
          matrikel_number: dbData[0].matrikel_number,
          first_name: dbData[0].first_name,
          last_name: dbData[0].last_name,
          dob: dbData[0].dob,
          email: dbData[0].email,
          address: dbData[0].address,
          phone_number: dbData[0].phone_number,
          role_id: 0,
          username: DBForm.userdata.username,
          password: DBForm.userdata.password,
          postal_code: dbData[0].postal_code,
          created_date: dbData[0].created_date,
          modified_date: dbData[0].modified_date
        };

        //this.userDBData(dbData);
        this.users= dbData;
        console.log("DBdata in regFunc",this.users);
        console.log(pdata);
        if(userdata.username && userdata.password){
          this.postNewUser(pdata);
          this.router.navigate(['/pages/login'])
        }
        
      }
    );
  }
  postNewUser(userData) {
    const jsonData = JSON.stringify(userData);
    console.log(jsonData);

    this.RegisterService.postUser(jsonData).subscribe(data => {});
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
   

    // alert("Registration Successful...")
}

}