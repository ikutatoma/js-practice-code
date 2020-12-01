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
  const a = parseInt(12, 8);
  const b = parseInt(12, 10);
  const c = parseInt(12, 16);
  console.log("8進数の12は10進数で" + parseInt(a, 10) + "です。");
  console.log("10進数の12は10進数で" + parseInt(b, 10) + "です。");
  console.log("16進数の12は10進数で" + parseInt(c, 10) + "です。");
})();