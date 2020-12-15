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
   function arrayRmvOf(a, idx, n) {
     if (n < 0 || idx > 0 || idx > a.length) {
       return a;
     } else {
       if (idx + n > a.length) {
         n = a.length - idx;
       }
       var c = new Array(a.length - n);
       var i = 0;
       for (; i < idx; i++) {
         c[i] = a[i];
       }
       for (; i < a.length - n; i++) {
         c[i] = a[i + n];
       }
       return c;
     }
   }

   var aa = await readUserInput("要素数: ");
   var num = parseInt(aa);
   let x = new Array(num);

   for (var i = 0; i < x.length; i++){
     var bb = await readUserInput("x[" + i + "] = ");
     x[i] = Number(bb);
   }
   var cc = await readUserInput("削除するインデックス :")
   let idx = parseInt(cc);

   var dd = await readUserInput("削除する要素の個数 :");
   let n = parseInt(dd);

   let y = arrayRmvOf(x, idx, n);
   for (var i = 0; i < y.length; i++){
     console.log("c[" + i + "] = " + y[i]);
   }
 })();