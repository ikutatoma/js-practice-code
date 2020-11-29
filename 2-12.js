const { COPYFILE_FICLONE_FORCE } = require('constants');

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
  const x = await readUserInput("整数値:");
  const a = parseInt(x)
  const max =  a + 5
  const min = a - 5
  const y = Math.floor(Math.random() * (max + 1 - min)) + min;
  console.log("その値±5の乱数を生成しました。")
  console.log("値は" + y + "です")
})();