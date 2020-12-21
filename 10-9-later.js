const {
  countReset,
  Console
} = require('console');
const {
  exitCode
} = require('process');

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
  //Date Objectを使う  途中までは書いてある
  class Point2D {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      if (x == void 0 || y == void 0) {
        if (x == void 0) {
          this.x = 0;
        }
        if (y == void 0) {
          this.y = 0;
        }
      }
    }
    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
    getCounter() {
      return counter;
    }
    toString() {
      return "(" + this.x + "," + this.y + "}";
    }
  }
  counter = 0;
  var aa = new Point2D();
  console.log(aa);
})();