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
  class Period{
    constructor(from,to) {
      this.from = new Day(from);
      this.to = new Day(to);
    }
    getFrom() {
      return new day(this.from);
    }
    getTo() {
      return new Day(this.to);;
    }
    toString() {
      return "{" + this.from + "〜" + this.to + "}";
    }
}
})();