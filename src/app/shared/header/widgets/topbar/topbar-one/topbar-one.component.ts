import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/pages/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar-one.component.html',
  styleUrls: ['./topbar-one.component.scss']
})
export class TopbarOneComponent implements OnInit {
  
  constructor(private loginservice: LoginService, private rt: Router) { }

  ngOnInit() { }

  checkuser() {
       alert("Please, login first to post a product!") ;
       this.loginservice.isRoutingFromSell = true;
      this.rt.navigateByUrl("/pages/login");
      }
  }
