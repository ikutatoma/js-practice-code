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

   function printBits(x) {
    for (var i = 31; i >= 0; i--) {
      process.stdout.write(((x >>> i & 1) == 1) ? '1' : '0');
    }
  }


  function set(x, pos,n) {
    return x | (~(~0 << n) << pos);
  }

  function reset(x, pos,n) {
    return x & ~(~(~0 << n) << pos);
  }

  function invers(x, pos,n) {
    return x^(~(~0 << n) << pos);
  }

  console.log("整数xのposビット目からn個のビットを操作します。");
  var aa = await readUserInput("x :");
  var bb = await readUserInput("pos :");
  var cc = await readUserInput("n :");
  var x = parseInt(aa);
  var pos = parseInt(bb);
  var n = parseInt(cc);

  console.log("\nx          = ");
  printBits(x);
  console.log("\nset(x,pos)        = ");
  printBits(set(x, pos,n));
  console.log("\nreset(x,pos)        = ");
  printBits(reset(x, pos,n));
  console.log("\ninverse(x,pos)        = ");
  printBits(invers(x, pos,n));
})();