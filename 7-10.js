const {
  randomInt
} = require('crypto');
const {
  read
} = require('fs');

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
  console.log("暗算トレーニング");
  do {
    var x = Math.floor(Math.random() * 900) + 100;
    var y = Math.floor(Math.random() * 900) + 100;
    var z = Math.floor(Math.random() * 900) + 100;
    var patten = Math.floor(Math.random() * 4) + 0;
    var kotae = 0;
    switch (patten) {
      case 0:
        kotae = x + y + z;
        break;
      case 1:
        kotae = x + y - z;
        break;
      case 2:
        kotae = x - y + 2;
        break;
      default:
        kotae = x - y - z;
        break;
    }
    while (true) {
      var aa = await readUserInput(x + ((patten < 2) ? "+" : "-") +
        y + ((patten % 2 == 0) ? "+" : "-") +
        z + "=");

      var k = parseInt(aa);
      if (k == kotae) {
        console.log("正解です！");
        break;
      }
      console.log("違いますよ！！");
    }
    var gg = await readUserInput("もう一度？<Yes..1/No..0>");
    var x = parseInt(gg);
  } while (x == 1);
})();
