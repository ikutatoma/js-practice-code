
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
  console.log("生");
  console.log("田");
  console.log("");
  console.log("斗");
  console.log("真");
  console.log("生\n田\n\n斗\n真")

})();