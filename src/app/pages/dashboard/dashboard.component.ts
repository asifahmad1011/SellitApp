import { Component, OnInit } from '@angular/core';
import { DashboardRouting } from "./dashboard-routing.module";
import { Observable } from "rxjs";
import { Router} from '@angular/router';

import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Dashboard, updateProfile } from "./dashboard";
import { DashboardService } from "./dashboard.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  model: any = {};
  userData: any = {};

  matrik = localStorage.getItem("matrikel_number");
  updateForm: FormGroup;
  
  // dashboardform: FormGroup;
  //Div toggle

  isShow = false;
  showProfile = false;
  Approved = false;
  UnderReview = false;
  Sold1 = false;
  Deleted = false;


  toggleDisplay() {
    this.isShow = true;
    this.showProfile = false;
    this.Approved=false;
    this.UnderReview = false;
    this.Sold1 = false;
    this.Deleted = false;

  }

  isApproved() {
    this.isShow = false;
    this.showProfile = false;
    this.Approved= true;
    this.UnderReview = false;
    this.Sold1 = false;
    this.Deleted = false;
  }
  isUnderReview() {
    this.isShow = false;
    this.showProfile = false;
    this.Approved= false;
    this.UnderReview = true;
    this.Sold1 = false;
    this.Deleted = false;
  }

  isSoldP() {
    this.Sold1 = true;
    this.isShow = false;
    this.showProfile = false;
    this.Approved= false;
    this.UnderReview = false;    
    this.Deleted = false;
  }

  isDeleted() {
    this.isShow = false;
    this.showProfile = false;
    this.Approved= false;
    this.UnderReview = false;
    this.Sold1 = false;
    this.Deleted = true;
  }
  profileDisplay(){
    this.showProfile = true;
    this.isShow = false;
    this.Approved= false;
    this.UnderReview = false;
    this.Sold1 = false;
    this.Deleted = false;

    var user1 = localStorage.getItem('matrikel_number');
    console.log("data",user1);
    // this.DashboardService.profileUpdate().subscribe(
    //   udata => {
    // console.log("userdata ", udata);
    //   });
    this.getProfileData();


  }

  constructor(private router: Router, private DashboardService: DashboardService, private formbuilder: FormBuilder ) { }
  selectedProduct:any =[];
  // url="http:localhost:3000/product/changeProductStatus/";
  url="http://localhost:3000/api/v1/product/changeProductStatus/";

  
  

  ngOnInit() {
    var user = localStorage.getItem('matrikel_number');
    console.log("data",user);
    // this.getProfileData();
    this.DashboardService.getProductsUser().subscribe(
      data => {
        console.log("Kuch MIla", data);
        
      this.selectedProduct= data;      

    });


    this.updateForm = this.formbuilder.group({
      matrikel_number: ["", [Validators.required]],
      firstname : ["" , [Validators.required]],
      lastname : ["" , [Validators.required]],
      address : ["" , [Validators.required]],
      phoneno : ["" , [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    });
  }
  
  getProfileData(){
    var user1 = localStorage.getItem('matrikel_number');
    // console.log("data",user1);
    this.DashboardService.profileUpdate(user1).subscribe(
      data => {
            var data1 = JSON.stringify(data);
            var udata = Object.values(data);
            console.log("userdata stringify", data1);
            console.log("userdata json ", udata);
            console.log("one", udata[0].username);
            this.updateForm = this.formbuilder.group({
              matrikel_number: [udata[0].matrikel_number, [Validators.required]],
              firstname : [udata[0].first_name , [Validators.required]],
              lastname : [udata[0].last_name  , [Validators.required]],
              address : [udata[0].address , [Validators.required]],
              phoneno : [udata[0].phone_number , [Validators.required]],
              username: [udata[0].username, [Validators.required]],
              // password: ["", [Validators.required]],
              // confirmPassword: ["", [Validators.required]]
            });

            this.userData = {
              matrikel_number: udata[0].matrikel_number,
              first_name: udata[0].first_name,
              last_name: udata[0].last_name,
              dob: udata[0].dob,
              email: udata[0].email,
              address: udata[0].address,
              phone_number: udata[0].phone_number,
              role_id: 0,
              username: udata[0].username,
              password: udata[0].password,
              postal_code: udata[0].postal_code,
              created_date: udata[0].created_date,
              modified_date: udata[0].modified_date
        };
      
    });
  };

  updateUser() {
    const userdata = this.updateForm.value;
    var user1 = localStorage.getItem('matrikel_number');
    console.log(userdata);
    // console.log(user1,"id");
    this.userData.address = userdata.address;
    this.userData.phone_number = userdata.phoneno;
    this.userData.username = userdata.username;

    console.log(this.userData);
    if(this.updateForm.invalid){
      alert("Registration Not Complete");
    }else{
      const jsonData = JSON.stringify(this.userData);
      this.DashboardService.updateUser(jsonData,user1).subscribe(data => {
        console.log(data);
        if(data.status == "success"){
          this.router.navigate(['/pages/dashboard'])
        }
      });
    }
  }


//  refresh() {
//   location.reload();
//  }

 
  Delete(resultd) {
    
    console.log("prodID",resultd);
    const pdata = {
          productid: resultd,
          status: 5,
        };

        console.log("Post Data for Del Status:",pdata);
        this.prodDeleteSatus(pdata);
      }

      prodDeleteSatus(postData) {
        const jsonData = JSON.stringify(postData);
        console.log("statusData:",jsonData);
        // location.reload();
        this.DashboardService.changeStatus(jsonData).subscribe(data => {});
      }
      Sold(resultd) {
       
        console.log("prodID",resultd);
        const pdata = {
              productid: resultd,
              status: 2,
            };
    
            console.log("Post Data for Sold Status:",pdata);
            this.prodSoldSatus(pdata);
            location.reload();
          }
    
          prodSoldSatus(postData) {
            const jsonData = JSON.stringify(postData);
            console.log("statusData:",jsonData);
        
            this.DashboardService.changeStatus(jsonData).subscribe(data => {});
            location.reload();
          }
          
    
}
