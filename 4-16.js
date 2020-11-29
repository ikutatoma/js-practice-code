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
  const a = await readUserInput("何cmから:");
  const b = await readUserInput("何cmまで:");
  const c = await readUserInput("何cmずつ:");
  const hMin = parseFloat(a);
  const hMax = parseFloat(b);
  const step = parseFloat(c);
  console.log("身長 標準体重");
  console.log("------------");
  for (var i = hMin; i < hMax; i += step) {
    console.log(i + " " + (0.9 * (i - 100)));
  }
})();