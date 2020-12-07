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
  function med(a, b, c) {
    if (a >= b) {
      if (b >= c) {
        return b
      } else if (a <= c) {
        return a;
      } else {
        return c;
      }
    } else if (a > c) {
      return a;
    } else if (b > c) {
      return c;
    } else {
      return b;
    }
  };

  const xx = await readUserInput("整数値a: ");
  var a = parseInt(xx);
  const yy = await readUserInput("整数値b: ");
  var b = parseInt(yy);
  const zz = await readUserInput("整数値c: ");
  var c = parseInt(zz);

  console.log("中央値は" + med(a, b, c) + "です。");
})();