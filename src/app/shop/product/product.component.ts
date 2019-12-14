import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  
  public product_data =[];
  @Input() product : Products;

  public variantImage  :  any = ''; 
  public selectedItem  :  any = '';

  constructor(private router: Router, public productsService: ProductsService) { 
  }

  ngOnInit() { 
 
    this.productsService.getProducts()
    .subscribe((data) => {
      this.product_data = data
      console.log("final:",this.product_data)} );
   }

 // Change variant images
  public changeVariantImage(image) {
     this.variantImage = image;
     this.selectedItem = image; 
  }  

}
