import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //Div toggle
  isShow = false;
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor() { }

  ngOnInit() {
  }

}
