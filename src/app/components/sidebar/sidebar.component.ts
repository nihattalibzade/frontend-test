import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuTitles: string [] = [];

  constructor() { }

  ngOnInit() {
    this.menuTitles = ['Marketing Plan', 'Dashboard', 'My Ads', 'Analytics', 'Cobiro Store'];
  }

}
