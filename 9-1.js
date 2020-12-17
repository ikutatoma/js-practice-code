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
  class Coordinate {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
    setX(x) {
      this.x = x;
    }
    setY(y) {
      this.y = y;
    }
    set(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  console.log("座標pを入力せよ.");
  var x = Number(await readUserInput("X座標: "));
  var y = Number(await readUserInput("Y座標"));

  var p = new Coordinate(x, y);

  console.log("座標qを入力せよ.");
   x = Number(await readUserInput("X座標: "));
   y = Number(await readUserInput("Y座標"));

   var q = new Coordinate(x, y);

  console.log((p == q) ? "p == qです。" : "p != qです");
  console.log((p.getX() == q.getX() && p.getY() == q.getY()) ? "pとqは等しいです。" : "pとqは等しくありません。");
})();