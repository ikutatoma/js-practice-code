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
  const a = await readUserInput("何個*を表示しますか:");
  var n = parseInt(a);
  if (n > 0) {
    for (var i = 0; i < n; i++){
      process.stdout.write("*");
    }
  }
})();