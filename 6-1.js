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
  var a = new Array;
  console.log("[" + 0 + "] = " + a[0]);
  console.log("[" + 1 + "] = " + a[1]);
  console.log("[" + 2 + "] = " + a[2]);
  console.log("[" + 3 + "] = " + a[3]);
})();