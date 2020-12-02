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
  const y = await readUserInput("要素数:");
  const n = parseInt(y);
  const a = new Array(n);
  for (var i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * ((10 + 1) - 1)) + 1;
  }
  for (var i = 10; i >= 1; i--) {
    for (var j = 0; j < n; j++) {
      if (a[j] >= i) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    process.stdout.write("\n")
  }
  process.stdout.write("\n")
  for (var i = 0; i < 2 * n; i++) {
    process.stdout.write("-");
  }
  process.stdout.write("\n")
  for (var i = 0; i < n; i++) {
    process.stdout.write(i % 10 + " ");
  }
})();