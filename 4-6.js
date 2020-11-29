const {
  read
} = require('fs');
const {
  parse
} = require('path');

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
    var x = await readUserInput("正の整数値:")
  } while (x <= 0);
  while (x >= 0) {
    console.log(--x);
  }
  console.log("xの値は" + x + "になりました。");
})();