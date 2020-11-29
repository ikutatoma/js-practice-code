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
  do {
    const a = await readUserInput("整数値:")
    const x = parseInt(a)
    if (x > 0) {
      console.log("その値は正です。");
    }
    else if (x < 0) {
      console.log("その値は負です。");
    }
    else {
      console.log("その値は０です。");
    }
    var retry = await readUserInput("1...yes/0...no:  ")
  } while (retry == 1);
})()