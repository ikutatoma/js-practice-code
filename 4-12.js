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
  console.log("カウントダウンします。");
  do {
    const a = await readUserInput("正の整数値:");
    var x = parseInt(a);
  } while (x <= 0);
  for (;x >= 0; x--){
    console.log(x)
  }
})();