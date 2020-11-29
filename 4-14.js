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
  console.log("1からnまでの和を求めます。")
  do {
    const a = await readUserInput("nの値:");
    var n = parseInt(a);
  } while (n <= 0);
  var sum = 0;
  for (var i = 0;i <=n; i++){
    sum += i;
  }
   console.log("1から" + n + "までの和は" + sum + "です。");
})();