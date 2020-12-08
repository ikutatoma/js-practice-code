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
  do {
    do {
      var aa = await readUserInput("正の整数値: ");
      var x = parseInt(aa);
    } while (x <= 0);

    console.log("逆に読むと");
    while (x >= 1) {
      console.log(parseInt(x % 10));
      parseInt(x /= 10);
    }
    console.log("です。");
    do {
      var bb = await readUserInput("もう一度？<Yes..1/No..0>");
      var yy = parseInt(bb);
    } while (yy != 1 && yy != 0);
  } while (yy == 1);
})();