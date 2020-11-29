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
  max = 99
  min = 10
  const no = Math.floor(Math.random() * (max + 1 - min)) + min;
  console.log("数当てゲーム");
  console.log("10~99の数の当ててください。");
  do {
    var x = await readUserInput("いくつかな:")
    if (x > no) {
      console.log("もっと小さな数だよ！")
    }
    else if (x < no) {
      console.log("もっと大きな数だよ！")
    }
  }while (x != no);
    console.log("正解です。");

})();