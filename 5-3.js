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
  console.log("変数xはfloat型で、変数yはdouble型です。");
  const a = await readUserInput("x:");
  const b = await readUserInput("y:");
  const x = parseFloat(a);
  const y = Number(b);
  console.log("x = " + x);
  console.log("y = " + y);
})();