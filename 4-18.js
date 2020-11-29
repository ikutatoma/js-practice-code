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
  const a = await readUserInput("整数値:");
  var n = parseInt(a);
  var count = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      process.stdout.write(i + " ");
      count++;
    }
  }
  console.log("\n約数は" + count + "個です。");
})();