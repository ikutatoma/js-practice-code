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
  function min(a, b, c) {
    var min = a;
    if (b < min) {
      min = b ;
    }
    if (c < min) {
      min = c ;
    }
    return min;
  };

  const xx = await readUserInput("整数値a: ");
  var a = parseInt(xx);
  const yy = await readUserInput("整数値b: ");
  var b = parseInt(yy);
  const zz = await readUserInput("整数値c: ");
  var c = parseInt(zz);

  console.log("最小値は" + min(a, b, c) + "です。");
})();