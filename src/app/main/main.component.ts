import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { isNull } from 'util';


declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ProductsService]
})
export class MainComponent implements OnInit {
  
  public url : any; 
  isLoggedIn: boolean;

  constructor(private router: Router) {  
    this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.url = event.url;
          }
    });
  }

  ngOnInit() { 
   $.getScript('assets/js/script.js');
   var mn = localStorage.getItem("matrikel_number");
   var tok = localStorage.getItem("token");

   if( mn === "" || isNull(mn) && isNull(tok) || tok === "" )
    this.isLoggedIn = false;
  else
    this.isLoggedIn = true;

  }

}
