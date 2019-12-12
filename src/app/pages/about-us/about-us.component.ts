import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Team 
  public team = [{
     image: 'assets/images/team/',
     name: 'Damilare Oyebanji',
     designation: 'Group Lead & Backend Developer'
   }, {
     image: 'assets/images/team/2.jpg',
     name: 'Parvin',
     designation: 'Backend Developer'
   }, {
     image: 'assets/images/team/3.jpg',
     name: 'Saksham Bhatnagar',
     designation: 'Frontend Developer'
   }, {
     image: 'assets/images/team/4.jpg',
     name: 'Lakshmi Ramesh',
     designation: 'Database Engineer'
   }, {
     image: 'assets/images/team/5.jpg',
     name: 'Sheila Adjei',
     designation: 'Frontend Developer'
  }, {
    image: 'assets/images/team/6.jpg',
    name: 'Asif Ahmad',
    designation: 'Frontend Developer'
 },
]

  // Team Slick slider config
  public teamSliderConfig = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 586,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
     ]
  };

}
