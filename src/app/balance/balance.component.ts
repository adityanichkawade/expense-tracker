import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
})
export class BalanceComponent {
  constructor(private transactionService: TransactionService) {}

  get total(): string {
    return this.transactionService.getTotal();
  }
}
