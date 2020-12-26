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
  var sum = 0;
  for (var i = 2; i < process.argv.length; i++){
    sum += Number(process.argv[i]);
  }
  console.log("合計は" + sum + "です。");
})();