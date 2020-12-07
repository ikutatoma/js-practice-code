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
  function putChars(c, n) {
    while (n-- > 0) {
      process.stdout.write(c);
    }
    process.stdout.write("\n");
  }

  function putStars(n) {
    putChars('*', n);
  }

  console.log("左下直角の三角形を表示します。");
  const aa = await readUserInput("段数は: ");
  const n = parseInt(aa);

  for (var i = 1; i <= n; i++){
    putStars(i);
  }
})();