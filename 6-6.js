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
  const x = await readUserInput("要素数:");
  const n = parseInt(x);
  const a = new Array(n);
  for (var i = 0; i < n;i++){
    var y = await readUserInput("a[" + i + "] = ");
    a[i] = parseInt(y);
  }
  process.stdout.write("{");
  if (n >= 2) {
    for (var i = 0; i < n - 1; i++){
      process.stdout.write(a[i] + ", ");
    }
  }
  if (n >= 1) {
    console.log(a[n - 1] + "}");
  }
})();