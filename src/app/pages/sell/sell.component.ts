import { Component, OnInit } from "@angular/core";
import { SellRoutingModule } from "./sell-routing.module";
import { Observable } from "rxjs";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Sell } from "./sell";
import { SellService } from "./sell.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-sell",
  templateUrl: "./sell.component.html",
  styleUrls: ["./sell.component.scss"]
})
export class SellComponent implements OnInit {
  model: any = {};
  public user = [];

  data = false;
  productform: FormGroup;
  massage: string;
  errorMessage:string;  
  constructor(
    private formbulider: FormBuilder,
    private SellService: SellService
  ) {}

  ngOnInit() {
    this.productform = this.formbulider.group({
      name: ["", [Validators.required]],
      category_id: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: ["", [Validators.required]],
      more_Details: ["", [Validators.required]],
      brand_id: ["", [Validators.required]],
      product_condition: ["", [Validators.required]],
    });
  }

  Register() {
    const userdata = this.productform.value;
    console.log(userdata);
    this.SellService.CategoryByID(userdata.category_id).subscribe(
      data => {
        const dbData = Object.values(data);
        console.log("Category Data:",dbData);

        const DBForm = { dbData, userdata, status: 3 };
        this.productform.reset();

        const pdata = {
          name: DBForm.userdata.name,
          slug: DBForm.userdata.name + DBForm.userdata.price,
          description: DBForm.userdata.description,
          price: DBForm.userdata.price,
          seller_id: 1300921,
          more_details: DBForm.userdata.more_details,
          status: 3,
          category_id: DBForm.userdata.category_id,
          brand_id: DBForm.userdata.brand_id,
          product_condition: DBForm.userdata.product_condition,
          created_date: Date,
          modified_date: Date
        };
        console.log("Post Data:",pdata);

        this.postNewAd(pdata);
      }
    );
  }
  postNewAd(userData) {
    const jsonData = JSON.stringify(userData);
    console.log("JSON",jsonData);

    this.SellService.postAd(jsonData).subscribe(data => {});
    }
  }