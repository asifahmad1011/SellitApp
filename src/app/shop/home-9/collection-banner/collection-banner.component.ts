import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../shared/services/products.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-collection-banner-nine',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerNineComponent implements OnInit {
   
  category_res= [];
  constructor(private productService: ProductsService,
    private http: HttpClient) { }

  ngOnInit() {

    this.productService.Category().subscribe((res) => {
      this.category_res = res
      console.log("Category:", res)});
  }

  // // Collection banner
  // public category = [{
  //   image: 'assets/images/electronics/5.jpg',
  //   title: 'Camera',
  //   link: '/home/no-sidebar/collection/3'
  // }, {
  //   image: 'assets/images/electronics/6.jpg',
  //   title: 'Mobile Phones',
  //   link: '/home/no-sidebar/collection/2'
  // },
  // {
  //   image: 'assets/images/electronics/7.jpg',
  //   title: 'Furniture',
  //   link: '/home/no-sidebar/collection/5'
  // }]

}
