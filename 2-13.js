
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
const min_1 = 0.0;
const max_1 = 1.0;
const min_2 = 0;
const max_2 = 10.0;
const min_3 = -1.0;
const max_3 = 1.0;
  const a = Math.random() * (max_1 - min_1) + min_1;
  const b = Math.random() * (max_2 - min_2) + min_2;
  const c = Math.random() * (max_3 - min_3) + min_3;

  console.log(a);
  console.log(b);
  console.log(c);
})();