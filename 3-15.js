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

  if (a < b) {
    if (a < c) {
      var min = a;
    } else {
      min = c
    }
  }else {
    if (b < c) {
      var min = b;
    } else {
      min = c
    }
  }
  console.log("最小値は" + min + "です。")
})();