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
  //配列aの作成
  const a_row = 4; //行
  const a_column = 3; //列

  var a_arr = new Array(a_row);
  for (var i = 0; i < a_row; i++) {
    a_arr[i] = new Array(a_column).fill(0);
  };

  //配列bの作成
  const b_row = 3; //行
  const b_column = 4; //列

  var b_arr = new Array(b_row);
  for (var i = 0; i < b_row; i++) {
    b_arr[i] = new Array(b_column).fill(0);
  };
  //配列cの作成
  const c_row = 4; //行
  const c_column = 4; //列

  var c_arr = new Array(c_row);
  for (var i = 0; i < c_row; i++) {
    c_arr[i] = new Array(c_column).fill(0);
  };

  console.log("行列aの要素の値を入力せよ。");
  for (var i = 0; i < a_row; i++) {
    for (var j = 0; j < a_column; j++) {
      var a_ele = await readUserInput("a[" + i + "][" + j + "]  :");
      a_arr[i][j] = parseInt(a_ele);

    }
  }
  console.log("行列bの要素の値を入力せよ。");
  for (var i = 0; i < b_row; i++) {
    for (var j = 0; j < b_column; j++) {
      var b_ele = await readUserInput("a[" + i + "][" + j + "]  :");
      b_arr[i][j] = parseInt(b_ele);
    }
  }
  for (var i = 0; i < c_row; i++) {
    for (var j = 0; j < c_column; j++) {
      c_arr[i][j] = 0;
      for (var k = 0; k < 3; k++) {
        c_arr[i][j] = a_arr[i][k] * b_arr[k][j];
      }
    }
  }

  console.log("行列aとbの積");
    for (var i = 0; i < c_row; i++) {
    for (var j = 0; j < c_column; j++) {
      process.stdout.write(String(c_arr[i][j]) + " ");
    }
    console.log("\n");
  }
})();