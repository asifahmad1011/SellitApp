import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Products } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
import * as $ from 'jquery';


var a = localStorage.getItem('matrikel_number');

@Component({
  selector: 'app-product-right-sidebar',
  templateUrl: './product-right-sidebar.component.html',
  styleUrls: ['./product-right-sidebar.component.scss']
})
export class ProductRightSidebarComponent implements OnInit {

  public product            :   any;
  public products           :   Products[] = [];
  public counter            :   number = 1; 
  public selectedSize       :   any = '';
  

//she
  selectedProduct;
  image = "";


  
  //Get Product By Id
  // constructor(private route: ActivatedRoute, private router: Router,
  //   public productsService: ProductsService, private wishlistService: WishlistService,
  //   private cartService: CartService) {
  //     this.route.params.subscribe(params => {
  //       const id = +params['id'];
  //       this.productsService.getProduct(id).subscribe(product => this.product = product)
  //     });
  // }

  //she
  constructor(private productsService: ProductsService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  //she
    this.activeRoute.params.subscribe(p => {
      var productId = p['id'];

      this.productsService.getProductById(productId).subscribe(res => {
        console.log(res);
        this.selectedProduct = res;
      });

    })
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
