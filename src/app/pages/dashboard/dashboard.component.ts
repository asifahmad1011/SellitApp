import { Component, OnInit } from '@angular/core';
import { DashboardRouting } from "./dashboard-routing.module";
import { Observable } from "rxjs";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Dashboard } from "./dashboard";
import { DashboardService } from "./dashboard.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  matrik = localStorage.getItem("matrikel_number");
  
  dashboardform: FormGroup;
  statusUpdate: FormGroup;
  //Div toggle
  isShow = false;
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor(private DashboardService: DashboardService, private formbuilder: FormBuilder ) { }
  selectedProduct:any =[];
  url="http://localhost:3000/product/changeProductStatus/";

  ngOnInit() {
    this.statusUpdate = this.formbuilder.group({
      product_id:["", [Validators.required]],
      
    });
    var user = localStorage.getItem('matrikel_number');
    console.log("data",user);

    this.DashboardService.getProductsUser().subscribe(
      data => {
        console.log("Kuch MIla", data);
      this.selectedProduct= data;
    });
  }

  getFormData(){
    const statusData = this.statusUpdate.value;

    console.log(statusData);
  }

  Delete() {
    const userdata = this.dashboardform.value.product_id;
    console.log(userdata);
    
        const DBForm = { userdata, status_id: 5 };

        const pdata = {
          product_id: DBForm.userdata.product_id,
          status_id: 5,
        };

        console.log("Post Data:",pdata);
        this.postNewUser(pdata);
      }

      postNewUser(userData) {
        const jsonData = JSON.stringify(userData);
        //console.log(jsonData);
    
        this.DashboardService.Delete(jsonData).subscribe(data => {});
      }
    
}
