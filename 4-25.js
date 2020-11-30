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
  do {
    var a = await readUserInput("2以上の整数値:");
    var n = parseInt(a);
  } while (n < 2);
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      break;
    }
  }
  if (i == n) {
    console.log("それは素数です。");
  } else {
    console.log("それは素数ではありません。");
  }

})();