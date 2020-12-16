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
  function absolute(x) {
    return x >= 0 ? x : -x;
  }
  var aa = await readUserInput("int型整数aの値: ");
  var bb = await readUserInput("float型整数bの値: ");
  var cc = await readUserInput("Number型整数cの値: ");

  var a = parseInt(aa);
  var b = parseFloat(bb);
  var c = Number(cc);

  console.log("aの絶対値は" + absolute(a) + "です。");
  console.log("bの絶対値は" + absolute(b) + "です。");
  console.log("bの絶対値は" + absolute(c) + "です。");
})();