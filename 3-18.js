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
  const a = parseFloat(x);
  const b = parseFloat(y);
  if (a < b) {
    var t = b;
    var k = a;
  }
  else {
    t = a;
    k = b;
  }
  console.log("a>=bとなるようにソートしました。");
  console.log("変数aは" + t + "です。")
  console.log("変数bは" + k + "です。" )
})();