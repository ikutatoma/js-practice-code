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
  function randomInt(min, max) {

    var rara = Math.floor(Math.random() * (max - min)) + min;
    return rara
  }
  var aa = await readUserInput("下限値: ");
  var bb = await readUserInput("上限値: ");
  const x = parseInt(aa);
  const y = parseInt(bb);

  console.log("生成した乱数は" + randomInt(x, y) + "です。");
})();