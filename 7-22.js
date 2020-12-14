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
   function arrayClone(a) {
     var c = new Array(a.length);
     for (var i = 0; i < a.length; i++) {
       c[i] = a[i];
     }
     return c;
   }

   var aa = await readUserInput("要素数: ");
   var num = parseInt(aa);
   var x = new Array(num);

   for (var i = 0; i < x.length; i++) {
     var bb = await readUserInput("x[" + i + "] =");
     x[i] = Number(bb);
     console.log("確認です。。。。" + "x[" + i + "] = " + x[i]);
   }

   var y =  arrayClone(x);;


   console.log("配列xの複製yを作りました。");
   for (var i = 0; i < num; i++) {
     console.log("y[" + i + "] = " + y[i]);
   }
 })();