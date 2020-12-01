const {
  parse
} = require('path');

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
  const {
    parse
  } = require('path');

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
    console.log("整数を加算します。")
    var a = await readUserInput("何個表示させますか:");
    var n = parseInt(a);
    var sum = 0;
    var count = 0;
    for (var i = 1; i <= n; i++){
      var b = await readUserInput("整数: ");
      var t = parseInt(b);
      if (t < 0) {
        console.log("負の数は加算しません。")
        continue;
      }
      sum += t;
      count++;
    }
    console.log("合計は" + sum + "です。");
    if (count != 0) {
      console.log("平均は" + (sum / count) + "です。");
    }
  })();
})();