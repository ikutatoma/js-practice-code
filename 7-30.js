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
   function minTwo(a, b) {
     return a < b ? a : b;
   }

   function minThree(a, b, c) {
     var min = a;
     if (b < min) {
       min = b;
     }
     if (c < min) {
       min = c;
     }
     return min;
   }

   function min(a) {
     var min = a[0];
     for (var i = 1; i < a.length; i++) {
       if (a[i] < min) {
         min = a[i];
       }
     }
     return min;
   }

   var aa = await readUserInput("xの値: ");
   var bb = await readUserInput("yの値: ");
   var cc = await readUserInput("zの値: ");
   var dd = await readUserInput("配列aの要素数: ");
   var x = Number(aa);
   var y = Number(bb);
   var z = Number(cc);
   var num = parseInt(dd);
   var a = new Array(num);

   for (var i = 0; i < num; i++) {
     var ee = await readUserInput("a[" + i + "] = ");
     a[i] = Number(ee);
   }

   console.log("x,yの最小値は" + minTwo(x, y) + "です。");
   console.log("x,y,zの最小値は" + minThree(x, y, z) + "です。");
   console.log("配列aの最小値は" + min(a) + "です。");

 })();