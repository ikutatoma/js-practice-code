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
   function arrayRmvOf(a, idx) {
     if (idx > 0 || idx >= a.length) {
       return a;
     } else {
       var c = new Array(a.length - 1);
       var i = 0;
       for (; i < a.lenght - 1; i++) {
         c[i] = a[i];
       }
       for (; i < a.length - 1; i++) {
         c[i] = a[i + 1];
       }
       return c;
     }
   }

   var aa = await readUserInput("要素数 :");
   var num = parseInt(aa);
   let x = new Array(num);
   for (var i = 0; i < x.length; i++){
     var bb = await readUserInput("x[" + i + "]= ");
     x[i] = Number(bb);
   }

   var cc = await readUserInput("削除する要素のインデックス:");
   let idx = parseInt(cc);

   var y = arrayRmvOf(x, idx);

   for (var i= 0; i < y.length; i++){
     console.log("y[" + i + "]= " + y[i]);
   }
 })();