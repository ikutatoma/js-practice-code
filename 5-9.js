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
  console.log("  float               xの2乗  ");
  console.log("----------------------------------");
  var x = parseFloat(0.0);
  for (var i = 0; i <= 1000; i++, x += 0.001) {
    var x = parseFloat(i /1000);
    console.log(x + "   " + (x * x));
  }

})();