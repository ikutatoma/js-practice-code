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
  function linearSearch(a, key) {
    for (var i = 0; i < a.length;i++){
      if (a[i] == key) {
        return i;
      }
    }
    return -1;
  }

  function linearSearchR(a, key) {
    for (var i = a.length - 1; i >= 0; i--) {
      if (a[i] == key) {
        return i;
      }
    }
    return -1;
  }

  var aa = await readUserInput("要素数:");
  var num = parseInt(aa);
  var x = new Array;
  for (var i = 0; i < num; i ++){
    var bb = await readUserInput("x[" + i +  "] :");
    x[i] = parseInt(bb);
  }
  var bb = await readUserInput("探す値: ");
  var ky = parseInt(bb);

  var idxTop = linearSearch(x, ky);
  var idxBtm = linearSearchR(x, ky);


  if (idxTop == -1) {
    console.log("その値の要素は存在しません。");
  }
  else if (idxTop == idxBtm) {
    console.log("その値はx[" + idxTop + "]にあります。");
  }
  else {
    console.log("その値の要素は複数存在します。");
    console.log("最も先端のものはx[" + idxTop + "]にあります。");
    console.log("最も末尾のものはx[" + idxBtm + "]にあります。");
  }
})();