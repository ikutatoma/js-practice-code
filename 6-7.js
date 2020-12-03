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
  const a = await readUserInput("人数:");
  const ninzu = parseFloat(a);
  console.log("点数を入力せよ。");
  var sum = 0;
  var tensu = new Array();
  for (var i = 0; i < ninzu; i++) {
    var c = await readUserInput((i + 1) + "番の点数");
    var score = parseInt(c);
    tensu[i] = score;
    sum += tensu[i];
  }
  var max = tensu[0];
  var min = tensu[0];
  for (var i = 1; i < ninzu; i++) {
    if (tensu[i] > max) {
      max = tensu[i];
    }
    if (tensu[i] < min) {
      min = tensu[i];
    }
  }
  console.log("合計点は" + sum + "点です。");
  console.log("平均点は" + (sum / ninzu) + "点です。");
  console.log("最高点は" + max + "点です。");
  console.log("最低点は" + min + "点です。");
})();