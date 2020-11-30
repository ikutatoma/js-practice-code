const { parse } = require('path');

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
  console.log("何個表示させますか:")
  var a = await readUserInput("整数:");
  var n = parseInt(a);
  var sum = 0;
  for (var i = 0; i < n;i++){
    var b = await readUserInput("整数(0で終了):");
    t = parseInt(b);
    if (t == 0) {
      sum += t;
      break;
    }
    sum += t;
  }
  console.log("合計は" + sum + "です。");
  if (i != 0) {
    console.log("平均は" + (sum / i) + "です。");
  }
})();