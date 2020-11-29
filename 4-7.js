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
  const x = await readUserInput("何個*を表示しますか:")
  var n = parseInt(x);
  if (n > 0) {
    var i = 0;
    while (i < n) {
      process.stdout.write('*');
      i++
    }
  }
})();