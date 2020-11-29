
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
  const a = await readUserInput("整数値:")
  const x = parseInt(a)
      console.log("10加えた数は" + (x + 10) + "です。");
  console.log("10を減じた値は" + (x - 10) + "です。");
})();