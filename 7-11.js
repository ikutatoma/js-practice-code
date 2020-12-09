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
  function pow2(no) {
    var pw = 1;
    while (no-- > 0) {
      pw *= 2;
    }
    return pw;
  }
  console.log("整数をビットシフトします。");
  var aa = await readUserInput("x: ");
  var bb = await readUserInput("n: ");
  var x = parseInt(aa);
  var n = parseInt(bb);
  var mPower = parseInt(x * pow2(n));
  var dPower =  parseInt(x / pow2(n));

  var lShift = x << n;
  var rShift = x >> n;

  console.log("[a] x * (２の%d乗) = %d", n, mPower);
  console.log("[b] x / (２の%d乗) = %d", n, mPower);
  console.log("[c] x << %d = %d", n, lShift);
  console.log( (mPower == lShift) ? "[a]と[c]の値は一致します。" : "[a]と[c]の値は一致しません。");
  console.log("[d] x >> %d = %d", n, rShift);
  console.log((dPower == rShift) ? "[b]と[d]の値は一致します。" : "[b]と[d]の値は一致しません。");
})();
