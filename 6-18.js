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
    const a_row = 4;//行
  const a_column = 3;//列

  var a_arr = new Array(a_row);
  for (var i = 0; i < a_row; i++) {
    a_arr[i] = new Array(a_column).fill(0);
  };
  const b_row = 3;//行
  const b_column = 4;//列

  var b_arr = new Array(b_row);
  for (var i = 0; i < b_row; i++) {
    b_arr[i] = new Array(b_column).fill(0);
  };

  console.log("行列aの要素の値を入力せよ。");
  for (var i = 0; i < a_row;i++){
    var a_ele = await readUserInput("a");
  }
  console.log("行列bの要素の値を入力せよ。");

})();