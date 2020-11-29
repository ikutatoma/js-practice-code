
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
  console.log("球の表面積と体積を求めます。")
  const a = await readUserInput("半径:")
  const r = parseFloat(a)
  console.log("表面積は" + (4 * 3.14 * r * r) + "です。");
  console.log("体積は" + (4 /3.0 * 3.14 * r * r * r) + "です。");
})();