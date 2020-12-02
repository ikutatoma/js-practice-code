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
  const a = await readUserInput("点数:");
  const ninzu = parseFloat(a);
  console.log("点数を入力せよ。");
  var sum = 0;
  var tensu = new Array();
  for (var i = 0; i < ninzu;i++){

  }
})();