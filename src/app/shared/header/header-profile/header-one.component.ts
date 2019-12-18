import { Component, Inject, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { LandingFixService } from '../../services/landing-fix.service';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from '../../services/windows.service';

import { Observable, of } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
declare var $: any;

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderProfileComponent implements OnInit {
  

  
  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,private fix: LandingFixService) { 
  }

  ngOnInit() { 
    $.getScript('assets/js/menu.js');
  }

  openNav() {
  	this.fix.addNavFix();
  }

  closeNav() {
     this.fix.removeNavFix();
  }

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
      if (number >= 300) { 
        this.document.getElementById("sticky").classList.add('fixed');
      } else {
        this.document.getElementById("sticky").classList.remove('fixed');
      }
  }

}
