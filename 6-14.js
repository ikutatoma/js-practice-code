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
  var b = new Array();
  do {
    const x = await readUserInput("要素数:");
    n = parseInt(x);
  } while (n < 1);

  for (var i = 0; i < n;i++){
    var ar = await readUserInput("a[" + i + "] = ");
    a[i] = parseInt(ar);
  }

  for (var i = 0; i < n; i++){
    b[i] = a[n - i - 1];
  }

    console.log("aの前要素を逆順にbにコピーしました。");
  for (var i = 0; i < n; i++){
    console.log("a[" + i + "] = " + b[i]);
  }
})();