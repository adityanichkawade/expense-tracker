import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
})
export class AddTransactionComponent {
  model = { text: '', amount: '' };

  constructor(private transactionService: TransactionService) {}

  onSubmit(transactionForm: NgForm) {
    const {
      valid,
      value: { amount, text },
    } = transactionForm.form;
    if (valid) {
      this.transactionService.addTransaction(
        new Transaction(Date.now(), text, amount)
      );
      transactionForm.reset();
    }
  }
}
