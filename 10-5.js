const {
  countReset
} = require('console');
const { exitCode } = require('process');

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
  console.log("整数型の表現範囲");
  console.log("int型: " + Number.MIN_VALUE +  "〜" + Number.MAX_VALUE);
})();