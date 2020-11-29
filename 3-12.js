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
  const a = await readUserInput("実数a:");
  const b = await readUserInput("実数b:");
  const x = parseFloat(a);
  const y = parseFloat(b);
  if (!(x == y)) {
    if (x > y) {
      var max = x
    }
    else if (y > x) {
      max = y
    }
    console.log("大きい方の値は" + max +  "です" )
  }
  else {
    console.log("実数aと実数bの値は同じです。")
  }
})();