import { Component, OnInit } from '@angular/core';
import { Products } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home-nine',
  templateUrl: './home-nine.component.html',
  styleUrls: ['./home-nine.component.scss']
})
export class HomeNineComponent implements OnInit {

  public products: Products[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	// this.productsService.getProducts().subscribe(product => { 
  	//   product.filter((item: Products) => {
    //      if(item.category_id == 1)
    //      	this.products.push(item)
    //   })
    // });
  }

}
