import { Component, OnInit } from '@angular/core';
import { Products } from '../../../../classes/product';
import { ProductsService } from '../../../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router'; 
import { MainComponent } from 'src/app/main/main.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar-one.component.html',
  styleUrls: ['./topbar-one.component.scss']
})
export class TopbarOneComponent implements OnInit {
  
  constructor(public productsService: ProductsService, private router: Router) { }

  ngOnInit() { }

  checkuser() {
       alert("Please, login first to post a product!") 
      }

  // checkuser() {
  //   if(localStorage.length == 0) {
  //    alert("Please, login first to post a product!"); } else {
  //     this.router.navigate(['/pages/sell']);
  //    }
  //   }
  }
