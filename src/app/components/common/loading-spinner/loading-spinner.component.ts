import { Component, OnInit } from '@angular/core';
import { BankingService } from 'src/app/services/banking.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor(public bs: BankingService) { }

  ngOnInit(): void {
  }

}
