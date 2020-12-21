const {
  countReset
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
  var x = await readUserInput("実数: ");
  console.log("絶対値:" + Math.abs(x));
  console.log("平方根:" + Math.sqrt(x));
  console.log("面積:" + Math.PI * x * x);
})();