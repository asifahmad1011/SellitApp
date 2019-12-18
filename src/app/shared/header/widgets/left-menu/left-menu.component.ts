import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../shared/services/products.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  
  category_res=[];

  constructor(private router: Router, public productService: ProductsService) { }

  ngOnInit() { 

    this.productService.Category().subscribe((res) => {
      this.category_res = res
      console.log("Category:", res)});
  }

}
