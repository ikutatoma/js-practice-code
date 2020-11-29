
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
  const a = await readUserInput("底辺:")
  const b = await readUserInput("高さ:")
  const width = parseFloat(a)
  const height = parseFloat(b)
  console.log("面積は" + (width * height) / 2 + "です。");
})();