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
   function arrayInsOf(a, idx, x) {
     if (n < 0 || idx > a.length) {
       return a;
     } else {
       var c = new Array(a.length + 1);
       var i = 0;
       for (; i < idx; i++) {
         c[i] = a[i];
       }
       for (; i < a.length; i++) {
         c[i + 1] = a[i];
       }
       c[idx] = x;
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
   var cc = await readUserInput("追加するインデックス :")
   let idx = parseInt(cc);

   var dd = await readUserInput("挿入する値 :");
   let n = parseInt(dd);

   let y = arrayInsOf(x, idx, n);
   for (var i = 0; i < y.length; i++){
     console.log("c[" + i + "] = " + y[i]);
   }
 })();