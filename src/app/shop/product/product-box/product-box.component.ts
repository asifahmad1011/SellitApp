import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../../shared/classes/product';
import { ProductsService } from '../../../shared/services/products.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  @Input() product : Products;

  public variantImage   :   any = ''; 

  constructor(private router: Router, public productsService: ProductsService) { 
  }

  ngOnInit() { }
 
}
