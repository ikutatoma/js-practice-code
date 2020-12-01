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
  const n = await readUserInput("整数値:");
  const x = parseInt(n);

  console.log("8進数では"(x).toString(8) + "です。");
  console.log("16進数では"(x).toString(16) + "です。");
})();