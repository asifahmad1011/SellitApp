import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../shared/services/products.service';
import * as $ from 'jquery';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  
  product_data;

  constructor(public productsService: ProductsService, private activeRoute: ActivatedRoute) { }
  
  // collapse toggle
  ngOnInit() {
    $('.collapse-block-title').on('click', function(e) {
        e.preventDefault;
        var speed = 300;
        var thisItem = $(this).parent(),
          nextLevel = $(this).next('.collection-collapse-block-content');
        if (thisItem.hasClass('open')) {
          thisItem.removeClass('open');
          nextLevel.slideUp(speed);
        } else {
          thisItem.addClass('open');
          nextLevel.slideDown(speed);
        }
    });


    this.activeRoute.params.subscribe(p => {
      var productId = p['id'];

      this.productsService.getProductById(productId).subscribe(res => {
        console.log(res);
        this.product_data = res;
      });

    })
  }

  // For mobile view
  public mobileFilterBack() {
     $('.collection-filter').css("left", "-365px");
  }

}
