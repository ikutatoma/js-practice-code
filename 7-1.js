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
  function signOf(n) {
    var sign = 0;
    if (n > 0) {
      sign = 1;
    } else if (n < 0) {
      sign = -1;
    }
    return sign;
  };

  const aa = await readUserInput("整数値");
  var x = parseInt(aa);

  var s = signOf(x);
  console.log("signOf(x)" + s + "です。");
})();