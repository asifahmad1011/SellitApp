import { Component, OnInit } from '@angular/core';
import { Products } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home-nine',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public products: Products[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Products) => {
         if(item.category_id == 1)
         	this.products.push(item)
      })
    });
  }

}
