import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Products } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { ProductSidebarService } from "./product-right-sidebar.service";
import { Observable } from "rxjs";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { FormsModule } from "@angular/forms";
import * as $ from 'jquery';


var a = localStorage.getItem('matrikel_number');

@Component({
  selector: 'app-product-right-sidebar',
  templateUrl: './product-right-sidebar.component.html',
  styleUrls: ['./product-right-sidebar.component.scss']
})
export class ProductRightSidebarComponent implements OnInit {

  model: any = {};
  public user = [];

  data = false;
  sendmsgform: FormGroup;
  massage: string;


    //Div toggle
    isShow = false;
    toggleDisplay() {
      this.isShow = !this.isShow;
    }

  public product            :   any;
  public products           :   Products[] = [];
  public counter            :   number = 1; 
  public selectedSize       :   any = '';
  

//she
  selectedProduct;
  image = "";



  //she
  constructor(private productsService: ProductsService, private activeRoute: ActivatedRoute, private formbulider: FormBuilder, private ProductSidebarService: ProductSidebarService) { }

  ngOnInit() {
  //she
    this.activeRoute.params.subscribe(p => {
      var productId = p['id'];

      this.productsService.getProductById(productId).subscribe(res => {
        console.log(res);
        this.selectedProduct = res;
        
      });

    })

    this.sendmsgform = this.formbulider.group({
      message: ["", [Validators.required]],
      product_id: ["", [Validators.required]],
      sender_id: ["", [Validators.required]],
      receiver_id: ["", [Validators.required]]
    })
  }

  ChatMsg() {
    const userdata = this.sendmsgform.value;
    console.log("chat:",userdata);



        const DBForm = { userdata };
        this.sendmsgform.reset();

        const pdata = {
          message: DBForm.userdata.message,
          product_id: DBForm.userdata.product_id,
          sender_id: localStorage.getItem("matrikel_number"),
          receiver_id: DBForm.userdata.receiver_id,
        };
        console.log("Post Data:",pdata);

        this.SendMsg(pdata);
      }

    
      SendMsg(userData) {
        const jsonData = JSON.stringify(userData);
        console.log("Send Message:",jsonData);
        this.ProductSidebarService.SendMsg(jsonData).subscribe(data => {});
      }
    

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  public slideNavConfig = {
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slick',
    arrows: false,
    dots: false,
    focusOnSelect: true
  }

  // For mobile filter view
  public mobileSidebar() {
    $('.collection-filter').css("left", "-15px");
  }

  public increment() { 
      this.counter += 1;
  }

  public decrement() {
      if(this.counter >1){
          this.counter -= 1;
      }
  }
}
