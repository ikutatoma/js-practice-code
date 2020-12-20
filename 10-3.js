const {
  countReset
} = require('console');

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
  class Id {
    constructor() {
      this.id = counter++;
    }
    getId() {
      return this.id;
    }
    getMaxId() {
      return counter;
    }
  }
  counter = 0;
  var a = new Id();
  var b = new Id();

  console.log("最後に与えた識別番号 = " + counter);
  console.log("最後に与えた識別番号 = " + a.getMaxId());
  console.log("最後に与えられた識別番号 = " + b.getMaxId());

})();