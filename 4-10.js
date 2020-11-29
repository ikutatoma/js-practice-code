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
    var a = await readUserInput("正の整数値:");
    var x = parseInt(a);
  }while(x <= 0)
  var i = 1;
  var factorial = 1;

  while (i <= x) {
    factorial = i * factorial
    i++;
  }
  console.log("１から" + x + "までの積は" + factorial + "です。");
})();