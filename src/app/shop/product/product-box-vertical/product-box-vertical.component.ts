import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../../shared/classes/product';
import { ProductsService } from '../../../shared/services/products.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-box-vertical',
  templateUrl: './product-box-vertical.component.html',
  styleUrls: ['./product-box-vertical.component.scss']
})
export class ProductBoxVerticalComponent implements OnInit {

  @Input() product: Products;

  public variantImage       :   any = ''; 

  constructor(private router: Router, public productsService: ProductsService) { 
  }

  ngOnInit() { }


}
