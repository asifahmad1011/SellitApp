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

  //Div toggle
  isShow = false;
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor(private DashboardService: DashboardService) { }
  selectedProduct;
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


}
