import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Product } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-right-sidebar',
  templateUrl: './product-right-sidebar.component.html',
  styleUrls: ['./product-right-sidebar.component.scss']
})
export class ProductRightSidebarComponent implements OnInit {

  public product            :   Product = {};
  public products           :   Product[] = [];
  public counter            :   number = 1; 
  
  //Get Product By Id
  constructor(private route: ActivatedRoute, private router: Router,
    public productsService: ProductsService) {
      this.route.params.subscribe(params => {
        const id = +params['id'];
        this.productsService.getProduct(id).subscribe(products => this.product = products)
        console.log("What?",id);
      });
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
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
