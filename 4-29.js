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
    var total = 0;
    outer: {
      for (var i = 0; i <= 10; i++) {
        console.log("第" + i + "グループ");

        inner: {
          for (var j = 0; j < 5; j++) {
            var a = await readUserInput("整数:");
            var t = parseInt(a);
            if (t == 99999) {
              break outer;
            } else if (t == 88888) {
              break inner;
            }
            total += t;
          }
        }

      }
    }
    console.log("合計は" + total + "です。");
  })();
})();