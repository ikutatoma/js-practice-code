function readUserInput(question) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      resolve(answer);
      readline.close();
    });
  });
}
// メイン処理
(async function main() {
  class Account{
    constructor(name,no,balance) {
      this.name = name;
      this.no = no;
      this.balance = balance;
    }
    getName() {
      return this.name;
    }
    getNo() {
      return this.no;
    }
    getBalance() {
      return this.balance;
    }
    deposit(k) {
      this.balance += k;
    }
    withdraw(k) {
      this.balance -= k;
    }
  }
  module.exports = Account;
})();