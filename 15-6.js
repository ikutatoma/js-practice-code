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
  var s1 = await readUserInput("文字列s1: ");
  var s2 = await readUserInput("文字列s2:");
  var idx = s1.indexOf(s2);
  if (idx == -1) {
    console.log("s1はs2に含まれません。");
  }
  else {
    console.log(s1);
    for (var i = 0; i < idx; i++){
      process.stdout.write(" ");
    }
    console.log(s2);
  }
})();