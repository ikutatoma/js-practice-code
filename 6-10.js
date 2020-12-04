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
  const b = await readUserInput("要素数:");
  const n = parseInt(b);
  var a = new Array();
  var max = 10;
  var min = 1;
  for (var j = 0; j < n; j++) {
    var score = Math.floor(Math.random() * ((max + 1) - min)) + min;
    a[j] = score;
  }
  for (var i = 0; i < n;i++){
    console.log("a[" + i + "] = " + a[i]);
  }
})();