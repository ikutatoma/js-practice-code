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
  var n = 0;
  var a = new Array();
  do {
    const x = await readUserInput("要素数:");
    n = parseInt(x);
  } while (n < 1);

  for (var i = 0; i < n;i++){
    var ar = await readUserInput("a[" + i + "] = ");
    a[i] = parseInt(ar);
  }

  for (var i = 0; i < 2 * n;i++){
    var idx1 = Math.floor(Math.random() * n) + 0;
    var idx2 = Math.floor(Math.random() * n) + 0;
    var t = a[idx1];
    a[idx1] = a[idx2];
    a[idx2] = t;
  }
  console.log("要素をかき混ぜました。");
  for (var i = 0; i < n; i++){
    console.log("a[" + i + "] = " + a[i]);
  }
})();