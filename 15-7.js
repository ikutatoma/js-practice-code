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
  var s1 = await readUserInput("文字列s1: ");
  var s2 = await readUserInput("文字列s2:");
  if (s1 == s2) {
    console.log("s1 == s2です。")
  } else {
    console.log("s1 != s2です。")
  }
  if (s1.match(s2)) {
    console.log("s1とs2の中身は等しい。");
  }
  else {
    console.log("s1とs2の中身は等しくない。");
  }

})();