import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpEventType } from '@angular/common/http';
import { SellRoutingModule } from "./sell-routing.module";
import { Observable } from "rxjs";
import { Router } from '@angular/router';    

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
  public rows = [];
  data = false;
  
  urls = [];
  selectedFile: File = null;
 
  productform: FormGroup;
  massage: string;
  public results: any[];
  errorMessage:string;  
  constructor(
    private formbulider: FormBuilder,
    private SellService: SellService,
    private http: HttpClient,
    private router:Router,
  ) {}

  ngOnInit() {
    this.productform = this.formbulider.group({
      name: ["", [Validators.required]],
      category_id: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: ["", [Validators.required]],
      more_details: ["", [Validators.required]],
      brand_id: ["", [Validators.required]],
      product_condition: ["", [Validators.required]],
      image: ["", [Validators.required]],
      seller_id: ["",[Validators.required]],
      
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => { 
                  console.log(event.target.result);
                   this.urls.push(event.target.result); 
                }
                this.selectedFile = <File>event.target.files[i];
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }
  Product() {
    const userdata = this.productform.value;
    console.log(userdata);
         
        const DBForm = { userdata, status: 3 };
        this.productform.reset();

        const pdata = {
          name: DBForm.userdata.name,
          slug: DBForm.userdata.name + DBForm.userdata.price,
          description: DBForm.userdata.description,
          price: DBForm.userdata.price,
          seller_id: localStorage.getItem('matrikel_number'),
          more_details: DBForm.userdata.more_details,
          status: 3,
          category_id: DBForm.userdata.category_id,
          brand_id: DBForm.userdata.brand_id,
          product_condition: DBForm.userdata.product_condition,
          image: DBForm.userdata.image,
          created_date: Date,
          modified_date: Date
        };
        console.log("Post Data:",pdata.image);

        this.postNewAd(pdata);
  }

  
  postNewAd(userData) {
    const jsonData = JSON.stringify(userData);
    console.log("JSON",jsonData);
    
    this.SellService.postAd(jsonData).subscribe(data => {});

    return sessionStorage.getItem(this.model.matrikel_number);
    }

  Category() {

    const userdata = this.productform.value;
    this.SellService.CategoryByID(userdata.rows).subscribe(
      data => {
        console.log(data);
        this.results = data   });
  } 

  myFunction() {
    var user = localStorage.getItem('matrikel_number');
    console.log(user);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
      const fd = new FormData();
      fd.append('image',this.selectedFile, this.selectedFile.name)
      this.http.post('https://api.imgbb.com/1/upload?key=71754c0e6a4068fb0f4ea41370a58bb2', fd, {
        reportProgress: true,
        observe: 'events'

      })
      .subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          console.log('Upload Progess:' + Math.round(event.loaded / event.total * 100) + '%')
        } else if (event.type == HttpEventType.Response) {
          this.router.navigate(['./pages/order-success']);
        }
        console.log(event);
      });
  }

}
  interface Categories{

    category_id: bigint,
    name: string,
    description: string,
    parent_id: bigint,
    create_date: Date,
    modified_date: Date,
  }


