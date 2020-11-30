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
  console.log("左下直角の二等辺三角形を表示します。");
  const a = await readUserInput("段数は:");
  const n = parseInt(a);
  for (var i = 1; i <= n; i++){
    for (var j = 1; j <= i; j++){
      process.stdout.write("*")
    }
    process.stdout.write("\n")
  }
})();