
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
  const x = await readUserInput("整数A:")
  const y = await readUserInput("整数B")
  var a = parseInt(x);
  var b = parseInt(y);
  if (a > b) {
    var t = a
    a = b;
    b = t;
  }
  do {
    console.log(a);
    a = a + 1
  } while (a <= b);
})();