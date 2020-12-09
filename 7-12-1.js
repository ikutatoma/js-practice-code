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

  async function printBit(x) {
    for (var i = 31; i >= 0; i--) {
      process.stdout.write(((x >>> i & 1) == 1) ? '1' : '0');
    }
  }


  async function rRotate(x, n) {
    if (n < 0) {
      return lRotate(x, -n);
    }
    n %= 32;
    return (n == 0 ? x : (x >>> n) | (x << (32 - n)));
  }


  async function lRotate(x, n) {
    if (n < 0) {
      return rRotate(x, -n);
    }
    n %= 32;
    return (n == 0 ? x : (x << n) | (x >>> (32 - n)));
  }

  console.log("整数xをnビット回転します。");
  var aa = await readUserInput("x :");
  var bb = await readUserInput("n :");
  var x = parseInt(aa);
  var n = parseInt(bb);

  console.log("回転前 = ");
  printBit(x);
  console.log("右転前 = ");
  printBit(rRotate(x, n));
  console.log("左転前 = ");
  printBit(lRotate(x, n));
})();