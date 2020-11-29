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
  const a = await readUserInput("整数値:");
  const x = parseInt(a);
  if (x > 0) {
    if (x % 3 == 0) {
      console.log("その値は3で割り切れます。")
    }
    else if(x % 3 == 1) {
      console.log("３で割った余りは1です")
    }
    else {
      console.log("３で割った余りは２です")
    }
  }
  else {
    console.log("正でない値は入力されました。")
  }
})();