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
  var aa = await readUserInput("クラス数: ");
  const classNum = parseInt(aa);
  point = new Array(classNum);

  var ninzu = 0;
  for (var i = 0; i < point.length; i++) {
    var bb = await readUserInput("\n" + (i + 1) + "組の人数: ");
    var num = parseInt(bb);
    point[i] = parseInt(num);
    ninzu += num;
    point[i] = new Array(num);
    for (var j = 0; j < point[i].length; j++) {
      var cc = await readUserInput((i + 1) + "組" + (j + 1) + "番の点数:");
      point[i][j] = parseInt(cc);

    }
  }

  console.log("  組 |  合計   平均");
  console.log("-----+-------------")
  var total = 0;
  for (var i = 0; i < point.length; i++) {
    var sum = 0;
    for (var j = 0; j < point[i].length; j++) {
      sum += point[i][j];
    }
    total += sum;

    console.log(" " + (i + 1) + "組 |   " + sum + "      " + Math.round(sum / point[i].length * 10)/10);
  }
  console.log("-----+-------------");
  console.log("  計 |   " + total + "      " +  Math.round(total / ninzu *10)/10);

})();