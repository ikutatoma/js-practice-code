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
  function aryclone(a) {
    var c = new Array(a.length);
    for (var i = 0; i < a.length; i++){
      c[i] = new Array(a[i].length)
      for (var j = 0; j < a[i].length; j++){
        c[i][j] = a[i][j];
      }
    }
    return c;
  }

  function printMatrix(m) {
     for (var i = 0; i < m.length; i++) {
       for (var j = 0; j < m[i].length; j++) {
         process.stdout.write(m[i][j] + " ");
       }
       console.log("\n");
     }
   }


  var height = await readUserInput("行列の行数: ");
  var width = await readUserInput("行数の列数: ");

  var a = new Array(height);

    for (var i = 0; i < a.length; i++){
     a[i] = new Array(parseInt(width));
     for (var j = 0; j < a[i].length; j++){
       var aa = await readUserInput("a[" + i + "][" + j + "]");
       a[i][j] = Number(aa);
     }
    }
  let ca = aryclone(a);
  console.log("行列a");
  printMatrix(a);
  console.log("行列aの複製");
  printMatrix(ca);
 })();