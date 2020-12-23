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
      counter++;
      if (x == void 0 || y == void 0) {
        if (x == void 0) {
          this.x = 0;
        }
        if (y == void 0) {
          this.y = 0;
        }
      }
      if (counter == todayDate) {
        console.log("当たり！！");
        console.log("今日" + counter + "個目の座標が生成されました。");
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
  today = new Date();
  todayDate = today.getDate();
  counter = 0;

  for (var i = 0; i < 40; i++){
    var p = new Point2D();
    console.log("(" + p.getX() + "," + p.getY() + ")");
  }
})();