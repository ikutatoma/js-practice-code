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
  function minOf(a) {
    var min = a[1];
    a.forEach(function (value) {
      if ((value) < min) {
        min = value;
      };
    });
    return min;
  }



  var aa = await readUserInput("人数は:");
  var ninzu = parseInt(aa);
  var height = new Array(ninzu);
  var weight = new Array(ninzu);

  console.log(ninzu + "人の身長と体重を入力せよ。");
  for (var i = 0; i < ninzu; i++) {
    var bb = await readUserInput((i + 1) + "番目の身長");
    var cc = await readUserInput((i + 1) + "番目の体重");
    height[i] = Number(bb);
    weight[i] = Number(cc);
  }
  console.log("最も背が低い人の身長:" + minOf(height) + "cm");
  console.log("最も痩せている人の体重:" + minOf(weight) + "kg");
})();