import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  
  @Input() product : Product;

  public variantImage  :  any = ''; 
  public selectedItem  :  any = '';

  constructor(private router: Router, public productsService: ProductsService) { 
  }

  ngOnInit() {  }

 // Change variant images
  public changeVariantImage(image) {
     this.variantImage = image;
     this.selectedItem = image; 
  }  

}
