const {
  O_CREAT
} = require('constants');

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
  //対象文字列
var str = "ABC";

//１文字目のASCIIコードを取得する

  var aa = await readUserInput("文字列s: ");
  s = aa.split('');
  for (var i = 0; i < s.length; i++) {
      var bb = aa.charCodeAt(i);
    console.log("s["+ i + "] = " + s[i] + " "+ bb);
  }
})();