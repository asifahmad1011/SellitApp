import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../shared/classes/product';
import { CartItem } from '../../../shared/classes/cart-item';
import { ProductsService } from '../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-product-box-metro',
  templateUrl: './product-box-metro.component.html',
  styleUrls: ['./product-box-metro.component.scss']
})
export class ProductBoxMetroComponent implements OnInit {

  @Input() product : Product;

  constructor(private router: Router, public productsService: ProductsService, ) { 
  }

  ngOnInit() {
    $.getScript('assets/js/masonary.js');
  }

}
