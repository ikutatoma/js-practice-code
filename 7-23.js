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
   function ArraySrchIdx(a,x) {
     var count = 0;
     for (var i = 0; i < a.length; i++) {
       if (a[i] == x) {
         count++;
       }
     }
     var c = new Array(count--);
     for (var i = a.length - 1; count >= 0;i--){
       if (a[i] == x) {
         c[count--] = i;
       }
     }
      return c;
   }

   var aa = await readUserInput("要素数: ");
   let num = parseInt(aa);
   let x = new Array(num);

   for (var i = 0; i < num; i++){
     var bb = await readUserInput("x[" + i + "] = ");
     x[i] = Number(bb);
   }

   var cc = await readUserInput("探索する値:");
   var n = Number(cc);

   let b = ArraySrchIdx(x, n);

   if (b.length == 0) {
     console.log("一致する値はありません。");
   }
   else {
     console.log("一致する値のインデックス");
     for (var i = 0; i < b.length;i++){
       console.log(b[i]);
     }
   }
 })();