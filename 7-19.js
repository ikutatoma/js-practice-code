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

   function aryRmvN(a, idx, n) {
     if (n > 0 && idx >= 0 && (idx + n) < a.length) {
       var idx2 = idx + n - 1;
       if (idx2 > (a.lenth - n - 1)) {
         idx2 = a.lenth - n - 1;
       }
       for (var i = idx; i <= idx2; i++) {
         if (idx != idx2) {
           a[i] = a[i + n];
         } else {
           a[i] = 0;
         }
       }
     }
   }

   var aa = await readUserInput("要素数: ");
   var num = parseInt(aa);
   let a = new Array(num);
   for (var i = 0; i < num; i++) {
     var bb = await readUserInput("a[" + i + "]:");
     a[i] = Number(bb);
   }

   var cc = await readUserInput("削除を開始するインデックス:")
   var dd = await readUserInput("削除する要素の個数: ");

   let idx = parseInt(cc);
   let n = parseInt(dd);

   aryRmvN(a, idx, n);
   for (var i = 0; i < num; i++) {
     console.log("a[" + i + "]= " + a[i]);
   }
 })();