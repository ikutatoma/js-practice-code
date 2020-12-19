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
      this.x = 0.0;
      this.y = 0.0;
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
    set(x,y) {
      this.x = x;
      this.y = y;
    }
    equalTo(c) {//cって何？
      return x == c.x && y == c.y;
    }
    toString() {
      return "(" + x + ", " + y + ")";
    }
  }
}
)();