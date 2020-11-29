
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
  const b = await readUserInput("整数値:")
  const x = parseFloat(a)
  const y = parseFloat(b)
  console.log("合計は" + (x + y) + "です");
  console.log("平均は" + (x + y) / 2 + "です。");
})();