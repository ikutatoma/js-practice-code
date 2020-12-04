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
  } while (n > 10);

  var max = 10;
  var min = 1;
  a[0] = Math.floor(Math.random() * (max + 1 - min)) + min;
  for (var i = 1; i < n; i++) {
    do {
      a[i] = Math.floor(Math.random() * (max + 1 - min)) + min;
    } while (a[i] == a[i - 1]);
  }

  for (var i = 0; i < n; i++) {
    console.log("a[" + i + "] = " + a[i]);
  }
})();