class BankAccount {
  constructor(initialImport) {
    this.initialImport = initialImport;
  }

  deposit(addBank) {
    return this.initialImport += addBank;
  }
  withdraw(subBank) {
    return this.initialImport -= subBank;
  }
  view() {
    return this.initialImport;
  }
}

const bankAccount = new BankAccount(1000);
console.log(`Iniatial Import: ${bankAccount.initialImport}`)
console.log(`deposit:        +${bankAccount.deposit(500)}`);
console.log(`deposit:        +${bankAccount.deposit(200)}`);
console.log(`withdraw:       - ${bankAccount.withdraw(800)}`);
console.log('-----------------------');
console.log(`view balance:     ${bankAccount.view()}`);
