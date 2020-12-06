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
  function med3(a,b,c) {

  };
  const x = await readUserInput("整数値a: ");
  const y = await readUserInput("整数値b: ");
  const z = await readUserInput("整数値c: ");

  const a = parseInt(x);
  const b = parseInt(y);
  const c = parseInt(z);

  console.log(中央値は + med3(a, b, c) + "です。");
})();