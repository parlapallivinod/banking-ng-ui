import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.css']
})
export class PublicHeaderComponent implements OnInit {
  isMenuCollapsed:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
