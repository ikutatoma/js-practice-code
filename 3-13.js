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
  const a = await readUserInput("整数a:");
  const b = await readUserInput("整数b:");
  const x = parseInt(a);
  const y = parseInt(b);

    if (x >= y) {
      var diff = x - y;
    }
    else{
      diff = y - x;
    }
  console.log("それらの差は" + diff + "です。");
})();