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
  function printArray(a) {
    for (var i = 0; i < a.length; i++) {
      console.log(a[i] + " ");
    }
  }

  function printArrayIn(a) {
    var width = new Array(a.length);
    var max = 0;
    for (var i = 0; i < a.length; i++) {
      width[i] = new Array(a[i].length);
      if (a[i].length > max) {
        max = a[i].length;
      }
    }
    var maxWidth = new Array(max);
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a[i].length; j++) {
        var value = a[i][j];
        width[i][j] = ((value > 0) ? 1 : 0);
        do {
          width[i][j]++;
          value /= 10;
        } while (value != 0);
        if (width[i][j] > maxWidth[j]); {
          maxWidth[j] = width[i][j];
        }
      }
    }
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a[i].length - 1; j++) {
        var intoString = String(a[i][j]);
        process.stdout.write(intoString + " ");
        for (var k = 0; k <= maxWidth[j] - width[i][j]; k++) {
          console.log(' ');
        }
      }
      console.log(a[i][a[i].length - 1]);
    }
  }

  var aa = await readUserInput("一次元配列xの要素数");
  var num = parseInt(aa);
  let x = new Array(num);
  for (var i = 0; i < num; i++) {
    var bb = await readUserInput("x[" + i + "] = ");
    x[i] = Number(bb);
  }

  var cc = await readUserInput("二次元配列yの行数");
  let height = parseInt(cc);
  var y = new Array(height);
  for (var i = 0; i < y.length; i++) {
    var dd = await readUserInput(i + "行目の列数");
    var column = parseInt(dd)
    y[i] = new Array(column);
  }
  console.log("各要素の値を入力せよ。")
  for (var i = 0; i < y.length; i++) {
    for (var j = 0; j < y[i].length; j++) {
      var ee = await readUserInput("y[" + i + "][" + j + "] = ");
      y[i][j] = Number(ee);
    }
  }

  console.log("一次元配列x");
  printArray(x);
  console.log("二次元配列y");
  printArrayIn(y);






})();