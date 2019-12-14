import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-banner-nine',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerNineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Collection banner
  public category = [{
    image: 'assets/images/electronics/5.jpg',
    title: 'Speakers',
    link: '/home/nine'
  }, {
    image: 'assets/images/electronics/6.jpg',
    title: 'Laptops',
    link: '/home/nine'
  },
  {
    image: 'assets/images/electronics/7.jpg',
    title: 'Bikes',
    link: '/home/nine'
  }]

}
