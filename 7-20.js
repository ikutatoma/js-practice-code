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
   function aryInt(a,idx,x) {
     if (idx >= 0 && idx < a.length) {
       for (var i = a.length - 1; i > idx; i--) {
         a[i] = a[i - 1];
       }
       a[idx] = x;
     }
   };
   var aa = await readUserInput("要素数: ");
   let num = parseInt(aa);
   let a = new Array;
   for (var i = 0; i < num;i++){
     var bb = await readUserInput("a[" + i + "]: ");
     a[i] = Number(bb);
   }

   var cc = await readUserInput("挿入する要素のインデックス: ");
   let idx = parseInt(cc);

   var dd = await readUserInput("挿入する値: ");
   let x = parseInt(dd);

   aryInt(a, idx, x);

   for (var i = 0; i < num;i++){
     console.log("a[" + i + "] =" + a[i]);
   }
 })();