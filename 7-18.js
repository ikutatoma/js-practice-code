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
  function aryRmv(a,idx) {
    if (idx >= 0 && idx < a.length) {
      for (var i = idx; i < a.length - 1; i++){
        a[i] = a[i + 1];
      }
    }
  }
  var aa = await readUserInput("要素数:");
  var num = parseInt(aa);
  let a = new Array(num);
  for (var i = 0; i < num; i++) {
    var bb = await readUserInput("a[" + i + "]:");
    a[i] = parseInt(bb);
  };
  var cc = await readUserInput("削除する要素のインデックス:");
  var idx = parseInt(cc);
  aryRmv(a,idx);
  for (var i = 0; i < num; i++){
    console.log("a[" + i + "]=" + a[i]);
  }
})();