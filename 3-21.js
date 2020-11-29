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
  const a = await readUserInput("何月ですか")
  const month = parseInt(a)
  switch (month) {
    case 3:
    case 4:
    case 5: console.log("春");break;
    case 6:
    case 7:
    case 8: console.log("夏");break;
    case 9:
    case 10:
    case 11: console.log("秋");break;
    case 12:
    case 1:
    case 2: console.log("冬"); break;
    default : console.log("そんな月はありません"); break;
  }
})();