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
  console.log("凹凸な2次元配列を作ります。");
  const aa = await readUserInput("行数: ");
  const height = parseInt(aa);

  var c = new Array(height);

  for (var i = 0; i < c.length; i++) {
    var bb = await readUserInput(i + "行目の列数");
    var width = parseInt(bb);
    c[i] = width;
  }

  console.log("各要素の値を入力せよ。");
  for (var i = 0; i < c.length; i++) {
    c[i] = new Array();
    for (var j = 0; j < c.length; j++) {
      var ee = await readUserInput("c[" + i + "][" + j + "]: ");
      c[i][j] = parseInt(ee);
    }
  }
  console.log("配列cの各要素の値は次のようになっています。");
  for (var i = 0; i < c.length;i++){
    for (var j = 0; j < c[i].length;j++){
      console.log(c[i][j]);

    }
  }
})();