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
  const a = await readUserInput("変数a:");
  const b = await readUserInput("変数b:");
  const x = parseInt(a);
  const y = parseInt(b);
  if (x > y) {
    console.log("aの方が大きいです。");
  }
  else if (x < y) {
    console.log("bの方が大きいです。");
  }
  else if(x == y){
    console.log("aとbは同じ値です。");
  }
})();