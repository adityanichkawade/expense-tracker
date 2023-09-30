import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private transactions: Transaction[] = [
    new Transaction(1, 'Flower', -20),
    new Transaction(2, 'Salary', 300),
    new Transaction(3, 'Book', -10),
    new Transaction(4, 'Camera', 150),
  ];
  constructor() {}

  private getAmounts(): number[] {
    return this.transactions.map(
      (transaction: Transaction) => transaction.amount
    );
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getTotal(): string {
    const amounts = this.getAmounts();
    return amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  }

  getExpense(): string {
    const amounts = this.getAmounts();
    return (
      amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);
  }

  getIncome(): string {
    const amounts = this.getAmounts();
    return amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  }

  delete(id: number) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }
}
