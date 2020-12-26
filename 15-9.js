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
  var s1 = Number(await readUserInput("実数値:"));
  var w = parseInt(await readUserInput("表示全桁"));
  var p = parseInt(await readUserInput("少数部桁数"));

  var aaa = Math.floor(s1 * Math.pow(10, p)) / Math.pow(10, p);
  console.log(aaa)
})();