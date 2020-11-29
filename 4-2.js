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
    const a = await readUserInput("３桁の整数値:");
    var retry = parseInt(a);
} while (retry < 100 || retry > 999);
  console.log(retry + "と入力しましたね。");
})()