import { Component, OnInit } from '@angular/core';
import { OrderSuccessRouting } from "./order-success-routing.module";
import { Observable } from "rxjs";

import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Success } from "./success";
import { OrderService } from "./order-success.service";
import { FormsModule } from "@angular/forms";



@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})



export class OrderSuccessComponent implements OnInit {
  selectedProduct;

  constructor(private OrderService: OrderService) { }

  ngOnInit() {
    var user = localStorage.getItem('matrikel_number');
    console.log("data",user);

    this.OrderService.getdetails().subscribe(
      data => {
        console.log("Kuch MIla", data);
      this.selectedProduct= data;
    });
  }


  }
