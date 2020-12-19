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
    constructor(n,num,z) {
      this.name = n;
      this.no = num;
      this.balance = z;
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
})();