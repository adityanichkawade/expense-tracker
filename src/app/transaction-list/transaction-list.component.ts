import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
})
export class TransactionListComponent {
  constructor(private transactionService: TransactionService) {}

  get transactionList(): Transaction[] {
    return this.transactionService.getTransactions();
  }

  deleteTransaction(id: number) {
    this.transactionService.delete(id);
  }
}
