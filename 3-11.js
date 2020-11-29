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
  const a = await readUserInput("点数:");
  const x = parseFloat(a);

  if (x >= 0 && x < 60) {
    console.log("不可。")
  } else if (x >= 60 && x < 70) {
    console.log("可")
  } else if (x >= 70 && x < 80) {
    console.log("良")
  } else if (x >= 80 && x <= 100) {
    console.log("優")
  } else {
    console.log("不正な点数です。")
  }
})();