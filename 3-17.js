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
  const x = await readUserInput("整数a:");
  const y = await readUserInput("整数b:");
  const a = parseInt(x);
  const b = parseInt(y);

  if (a == b) {
    console.log("二つの値は同じです。");
  } else {
    if (a < b) {
      var min = a;
      var max = b;
    } else {
      min = b;
      max = a;
    }
    console.log("小さい方の値は" + min + "です");
    console.log("大きい方の値は" + max + "です。");
  }

})();