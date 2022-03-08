import { Component, OnInit } from '@angular/core';
import { BankingService } from 'src/app/services/banking.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public bs:BankingService) { }

  ngOnInit(): void {
  }

}
