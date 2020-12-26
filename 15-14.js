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
  var r = process.argv[2];
  console.log("半径" + r + "の円周は" + 2 * Math.PI * r + "で面積は" + 2 * Math.PI * r * r + "です。");
})();