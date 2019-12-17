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
  
  // dashboardform: FormGroup;
  //Div toggle
  isShow = false;
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor(private DashboardService: DashboardService, private formbuilder: FormBuilder ) { }
  selectedProduct:any =[];
  url="http://localhost:3000/product/changeProductStatus/";

  ngOnInit() {
    

    

    var user = localStorage.getItem('matrikel_number');
    console.log("data",user);

    this.DashboardService.getProductsUser().subscribe(
      data => {
        console.log("Kuch MIla", data);
      this.selectedProduct= data;
    });
  }

 
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
          }
    
          prodSoldSatus(postData) {
            const jsonData = JSON.stringify(postData);
            console.log("statusData:",jsonData);
        
            this.DashboardService.changeStatus(jsonData).subscribe(data => {});
          }
    
}
