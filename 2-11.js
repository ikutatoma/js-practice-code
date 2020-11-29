
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
const min_1 = 1 ;
const max_1 = 9;
const min_2 = -9 ;
const max_2 = -1 ;
const min_3 = 10 ;
const max_3 = 99 ;
  const a = Math.floor(Math.random() * (max_1 + 1 - min_1)) + min_1;
  const b = Math.floor(Math.random() * (max_2 + 1 - min_2)) + min_2;
  const c = Math.floor(Math.random() * (max_3 + 1 - min_3)) + min_3;

  console.log(a);
  console.log(b);
  console.log(c);
})();
