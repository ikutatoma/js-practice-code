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

  function printBitsByte(x) {
    for (var i = 7; i >= 0; i--) {
      console.log(((x >>> i & 1) == 1) ? '1' : '0');
    }
  }


  function printBitsShort(x) {
    for (var i = 15; i >= 0; i--) {
      console.log(((x >>> i & 1) == 1) ? '1' : '0');
    }
  }

  function printBitsInt(x) {
    for (var i = 31; i >= 0; i--) {
      console.log(((x >>> i & 1) == 1) ? '1' : '0');
    }
  }

  function printBitsLong(x) {
    for (var i = 63; i >= 0; i--) {
      console.log(((x >>> i & 1) == 1) ? '1' : '0');
    }
  }

  var aa = await readUserInput("byte 型整数aの値: ");
  var bb = await readUserInput("short型の整数bの値: ");
  var cc = await readUserInput("int  型の整数cの値: ");
  var dd = await readUserInput("long 型の整数dの値: ");
  let a = parseInt(aa);
  let b = parseInt(bb);
  let c = parseInt(cc);
  let d = parseInt(dd);

  console.log("aのビット");
  printBitsByte(a);
  console.log("bのビット");
  printBitsShort(b);
  console.log("cのビット");
  printBitsInt(c);
  console.log("dのビット");
  printBitsLong(d);
})();