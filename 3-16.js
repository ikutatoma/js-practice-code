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
  const z = await readUserInput("整数c:");
  const a = parseInt(x);
  const b = parseInt(y);
  const c = parseInt(z);

  if (a >= b) {
    if (b >= c) {
      var med = b;
      console.log("a >= b >= c");
    } else if (a <= c) {
      med = a;
      console.log("c >= a >= b");
    } else {
      med = c;
      console.log("a >= c >= b");
    }
  } else {
    if (a >= c) {
      var med = a;
      console.log("b >= a >= c");
    } else if (b <= c) {
      med = b;
      console.log("c >= b >= a");
    } else {
      med = c;
      console.log("b >= c >= a");
    }
  }
  console.log("中央値は" + med + "です。")
})();
//bac
//bca
//aba