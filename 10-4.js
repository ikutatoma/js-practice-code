const {
  countReset
} = require('console');
const { exitCode } = require('process');

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
  class ExId {
    constructor() {
      this.id = counter += step;
    }
    getId() {
      return this.id;
    }
    getStep() {
      return step;
    }
    setStep(s) {
      step = (s >= 1) ? s : 1;
      return step;
    }
    getMaxId() {
      return counter;
    }
  }
  counter = 0;
  step = 1;

  var a = new ExId();
  var b = new ExsId();

  console.log("最後に与えた識別番号 = " + max);
  console.log("次回に与える識別番号 = " + (max + step));

})();