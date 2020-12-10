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
  var sum = 0;

  function sumOf(a) {
    a.forEach(function (value) {
      sum += value;
    })
    return sum;
  }

  var aa = await readUserInput("要素数:");
  var num = parseInt(aa);
  var x = new Array(num);
  for (var i = 0; i < num; i++) {
    var bb = await readUserInput("x[" + i + "]:");
    x[i] = parseInt(bb);
  }
  console.log("全要素の合計は" + sumOf(x) + "です。");
})();