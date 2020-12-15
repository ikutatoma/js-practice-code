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
   function addMatrix(x, y) {
     var z = new Array(x.length);
     console.log(x.length);
     for (var i = 0; i < x.length; i++) {
       z[i] = new Array(x[i].length);
       for (var j = 0; j < x[i].length; j++) {
         z[i][j] = x[i][j] + y[i][j];
       }
     }
     return z;
   }

   function printMatrix(m) {
     for (var i = 0; i < m.length; i++) {
       for (var j = 0; j < m[i].length; j++) {
         process.stdout.write(m[i][j] + " ");
       }
       console.log("\n");
     }
   }

   var row = await readUserInput("行列の行数:");
   var column = await readUserInput("行列の列数:");

   let a = new Array(parseInt(row));
   let b = new Array(parseInt(row));

   for (var i = 0; i < a.length; i++){
     a[i] = new Array(parseInt(column));
     for (var j = 0; j < a[i].length; j++){
       var aa = await readUserInput("a[" + i + "][" + j + "]");
       a[i][j] = Number(aa);
     }
   }
   for (var i = 0; i < b.length; i++){
     b[i] = new Array(parseInt(column));
     for (var j = 0; j < b[i].length; j++){
       var bb = await readUserInput("b[" + i + "][" + j + "]");
       b[i][j] = Number(bb);
     }
   }

   let c = addMatrix(a, b);

   console.log("行列a");
   printMatrix(a);
   console.log("\n行列b");
   printMatrix(b);
   console.log("\n行列c");
   printMatrix(c);

 })();