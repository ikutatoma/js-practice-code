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
  var a = new Array(5);
  for (var i = 0; i < a.length; i++) {
    var b = Number((i + 1)* 1.1);
    a[i] = b
  }
  for (i = 0; i < a.length; i++) {
    console.log("a[" + i + "] = " + a[i]);
  }
})();