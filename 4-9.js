

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
  console.log("正の整数値の桁数を求めます。");
  do {
    const a = await readUserInput("正の整数値:")
    var x = parseInt(a);
  } while (x <= 0)


  var digits = 1;

  while (x > 9) {
    x = x / 10
    digits++;
  }
  console.log("その数は" + digits + "桁です。");
})();