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
   function aryExchng(a, b) {
     var n = a.length < b.length ? a.length : b.length;

     for (var i = 0; i < n; i++) {
       var t = a[i];
       a[i] = b[i];
       b[i] = t;
     }
   }

   var aa = await readUserInput("配列aの要素数: ");
   const na = parseInt(aa);
   let a = new Array;

   var cc = await readUserInput("配列bの要素数: ");
   let nb = parseInt(cc);
   let b = new Array;

   for (var i = 0; i < na; i++) {
     var bb = await readUserInput("a[" + i + "] = ");
     a[i] = parseInt(bb);
   }

   for (var i = 0; i < nb; i++) {
     var dd = await readUserInput("b[" + i + "] = ");
     b[i] = parseInt(dd);
   }

   aryExchng(a, b);

   console.log("配列aとbの前要素を交換しました。");
   for (var i = 0; i < na; i++) {
     console.log("a[" + i + "] =" + a[i]);
   }

   for (var i = 0; i < nb; i++) {
     console.log("b[" + i + "] =" + b[i]);
   }
 })();