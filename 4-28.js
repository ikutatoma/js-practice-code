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


  })();
})();