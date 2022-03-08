import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {
  isMenuCollapsed:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
