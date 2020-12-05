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
  const ninzu = 6; //行
  const subject = 2;
  var arr = new Array(ninzu);
  var sumStudent = new Array(ninzu).fill(0);
  var sumSubject = new Array(subject).fill(0);

  for (var i = 0; i < ninzu; i++) {
    arr[i] = new Array(subject);
    for (var j = 0; j < subject; j++) {
      arr[i].fill(0);
    }
  }
  console.log("%d人の国語・数学の点数を入力せよ。\n", ninzu);
  for (var i = 0; i < ninzu; i++) {
    var japanese = await readUserInput((i + 1) + "番・・・国語: ");
    arr[i][0] = parseInt(japanese);
    var math = await readUserInput("         数学: ");
    arr[i][1] = parseInt(math);
    sumStudent[i] = arr[i][0] + arr[i][1];
    sumSubject[0] += arr[i][0];
    sumSubject[1] += arr[i][0];
  }

  console.log("No. 国語 数学 平均");
  for (var i = 0; i < ninzu; i++) {
   console.log(" " + (i + 1) + "  " + arr[i][0] + " " + arr[i][1] + " " + (sumStudent[i] / 2 ) + " " + Math.round((sumSubject[0] / ninzu)* 10)/10 + " " +  Math.round((sumSubject[1] / ninzu)*10)/10);
  };
})();