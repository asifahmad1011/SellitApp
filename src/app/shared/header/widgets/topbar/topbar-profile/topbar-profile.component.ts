import { Component, OnInit } from '@angular/core';
import { Products } from '../../../../classes/product';
import { ProductsService } from '../../../../services/products.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-topbar-profile',
  templateUrl: './topbar-profile.component.html',
  styleUrls: ['./topbar-profile.component.scss']
})
export class TopbarProfileComponent implements OnInit {
  
  constructor(public productsService: ProductsService, private router: Router) { }

  ngOnInit() { }


  clearsession() {
    localStorage.clear();
  }
}
