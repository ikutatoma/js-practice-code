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
  const b = await readUserInput("要素数:");
  const n = parseInt(b);
  var a = new Array();
  var sum = 0;
  for (var j = 0; j < n; j++) {
    var g = await readUserInput("a[" + j + "] = ");
    var score = parseInt(g);
    a[j] = score;
    sum += score;
  }
  console.log("合計は" + sum + "です。");
  console.log("平均は" + sum / n + "です。");
})();