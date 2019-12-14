import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../shared/classes/product';

import { ProductsService } from '../../../shared/services/products.service';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-box-hover',
  templateUrl: './product-box-hover.component.html',
  styleUrls: ['./product-box-hover.component.scss']
})
export class ProductBoxHoverComponent implements OnInit {
  
  @Input() product : Product;

  constructor(private router: Router, public productsService: ProductsService) { 
  }

  ngOnInit() {
  }

}
