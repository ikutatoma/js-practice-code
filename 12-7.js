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
  let Account = require('./9-5');
  class TimeAccount extends Account {
    constructor(name, no, balance, timeBalance) {
      super(name, no, balance)
        this.timeBalance = timeBalance;
    }
    getTimeBalance() {
      return this.timeBalance;
    }
    cancel() {
      super.deposit(this.timeBalance);
      this.timeBalance = 0;
    }
  }

    function comBalance(a, b) {
      var totalBalanceA = a instanceof TimeAccount ? a.getBalance() + a.getTimeBalance() : a.getBalance();
      var totalBalanceB = b instanceof TimeAccount ? b.getBalance() + b.getTimeBalance() : b.getBalance();
      if (totalBalanceA > totalBalanceB) {
        return -1;
      } else if (totalBalanceA < totalBalanceB) {
        return -1;
      } else {
        return 0;
      }
    };

  var adachi = new Account("足立幸一", "123456", 500);
  var nakata = new TimeAccount("仲田真二", "654321", 300, 400);


  console.log("足立君と仲田君の預金残高の比較結果です。");

  var aa = comBalance(adachi, nakata);
  switch (aa) {
    case 0:
      console.log("二人の預金残高は同じ。");
      break;
    case 1:
      console.log("足立君のほうが預金残高が多い。");
      break;
    case -1:
      console.log("仲田君のほうが預金残高が多い。");
      break;
  }
})();