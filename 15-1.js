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
    for (var i = 0x21; i <= 0x7e; i++) {
    var str1 = String.fromCharCode(i);
      process.stdout.write(str1);
      process.stdout.write("  "+i.toString(16) +  "\n")
  }
})();