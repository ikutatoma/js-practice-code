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

  function printArray(sx) {
    for (var i = 0; i < sx.length; i++){
      console.log(sx[i]);
    }
  }
  var num = parseInt(await readUserInput("文字列の個数"));

  var sx = new Array(num);
  for (var i = 0; i < sx.length; i++){
    sx[i] = Number(await readUserInput("sx[" + i + "] = "));
  }
  printArray(sx);


})();