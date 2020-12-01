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
  var max_no = 6;
  var left_no = max_no;
  var max = 99
  var min = 0
  const no = Math.floor(Math.random() * (max + 1 - min)) + min;//0-100 の整数の乱数
  console.log("数当てゲーム");
  console.log("10~99の数の当ててください。");
  do {
    var n = await readUserInput("あと" + (left_no--) + "回。いくつかな:");
    var x = parseInt(n);
    if (x > no) {
      console.log("もっと小さな数だよ！")
    }
    else if (x < no) {
      console.log("もっと大きな数だよ！")
    }
  } while (x != no && left_no > 0);
  if (x == no) {
    console.log((max_no - left_no) + "回で当たりましたね。");
  }
  else {
    console.log("残念。正解は" + no + "でした。");
  }
})();