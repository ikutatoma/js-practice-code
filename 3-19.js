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
  const x = await readUserInput("変数a:");
  const y = await readUserInput("変数b:");
  const z = await readUserInput("変数c:");
  var a = parseFloat(x);
  var b = parseFloat(y);
  var c = parseFloat(z);

  // a -> b -> c
  if (a > b) {
    var t = a
    a = b;
    b = t;
  }
  if (b > c) {
    t = b
    b = c;
    c = t;
  }
  if (a > b) {
    t = a;
    a = b;
    b = t;
  }
  console.log("a<b<cとなるようにソートしました。");
  console.log("変数aは" + a + "です。")
  console.log("変数bは" + b + "です。")
  console.log("変数cは" + c + "です。")
})();

//abc
//acb
//bac
//bca
//cab
//cba