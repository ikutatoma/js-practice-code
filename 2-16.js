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
  var s1 = "ABC";
  var s2 = "XYZ";

  console.log("文字列s1は" + s1 + "です。");
  console.log("文字列s2は" + s2 + "です。");
  s1 = "FBI";
  console.log("文字列s1は" + s1 + "です。");
  console.log("文字列s2は" + s2 + "です。");
})();