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
  class Account {
    constructor(name, no, balance, openDay) {
      this.id = counter++;
      this.name = name;
      this.no = no;
      this.balance = balance;
      this.openDay = new Date(openDay);
      if (this.balance == void 0 || this.openDay == void 0) {
        this.balance = 0;
        this.openDay = "設定していません";
      }
      console.log("明解銀行での口座開設ありがとうございます。");
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
    getId() {
      return counter;
    }
    getOpenDay() {
      return this.openDay;
    }
    deposit(k) {
      this.balance += k;
    }
    withdraw(k) {
      this.balance -= k;
    }
    toString() {
      return "{" + this.name + ", " + this.no + ", " + this.balance + "}";
    }
  }
  counter = 0;
  var n = Number(await readUserInput("開設口座数: "));
  var a = new Array(n);
  for (var i = 0; i < a.length; i++) {
    var type = parseInt(await readUserInput("[0]...簡易 [1]...詳細: "));
    console.log("口座情報を入力せよ。");
    var name = await readUserInput("名義: ");
    var no = await readUserInput("番号: ");
    if (type == 0) {
      a[i] = new Account(name, no);
    } else {
      var balance = Number(await readUserInput("残高: "));
      var y = Number(await readUserInput("開設年: "));
      var m = Number(await readUserInput("開設月: "));
      var d = Number(await readUserInput("開設日"));
      a[i] = new Account(name, no, balance, new Date(y, m, d));
    }
    console.log("口座基本情報: " + a[i]);
    console.log("識別番号: " + a[i].getId());
    console.log("開設日: " + a[i].getOpenDay().toString());
  }

})();