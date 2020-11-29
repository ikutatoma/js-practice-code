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
  const a = await readUserInput("変数A:")
  const b = await readUserInput("変数B:")
  const x = parseInt(a);
  const y = parseInt(b);
  if (a % b == 0) {
    console.log("BはAの約数です。");
  }
  else {
    console.log("BはAの約数ではありません。");
  }

})();