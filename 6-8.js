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

  for (var j = 0; j < n; j++) {
    var g = await readUserInput("a[" + j + "] = ");
    var score = parseInt(g);
    a[j] = score;
  }

  var z = await readUserInput("探す数値:");
  var key = parseInt(z);
  var i = 0;
  for (i = 0; i < n; i++) {
    if (a[i] == key) {
      break;
    }
  }
  if (i < n) {
    console.log("それはa[" + i + "]にあります。");
  } else {
    console.log("それはありません。");
  }

})();