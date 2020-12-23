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
  var rand = Math.floor(Math.random() * (10 - 1)) + 1
  process.stdout.write("\n今日の運勢は");
  switch (rand) {
    case 0:
      process.stdout.write("大吉");
      break;
    case 1:
    case 2:
    case 3:
      process.stdout.write("吉");
      break;
    case 4:
    case 5:
    case 6:
      process.stdout.write("中吉");
      break;
    case 7:
    case 8:
      process.stdout.write("小吉");
      break;
    case 9:
      process.stdout.write("凶");
      break;
  }
  process.stdout.write("です。")
})();