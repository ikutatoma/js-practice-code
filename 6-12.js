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


  for (var i = 0; i < n; i++){
    do {
      var j = 0
      var max = 10;
      var min = 1;
      a[i] = Math.floor(Math.random() * (max + 1 - min)) + min;
      for (; j < i; j++) {
        if (a[j] == a[i]) {
          break;
        }
      }
    } while (j < i);
  }

  for (var i = 0; i < n; i++){
    console.log("a[" + i + "] = " + a[i]);
  }
})();