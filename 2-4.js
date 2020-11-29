
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
  var x = 63.4
  var y = 18.3
  var z = 52
  console.log("xの値は" + x + "です");
  console.log("yの値は" + y + "です");
  console.log("zの値は" + z + "です");
  console.log("合計は" + (x + y + z) + "です");
  console.log("平均は" + (x + y + z)/3 + "です");
})();