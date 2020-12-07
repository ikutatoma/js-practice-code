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
  function sumUp(n) {
    var sum = 0;
    for (var i = 1; i <= n; i ++){
      sum += i;
    }
    return sum;
  };
  console.log("1からXまでの和を求めます。");
  do {
    const xx = await readUserInput("整数値a: ");
    var a = parseInt(xx);
  } while (a <= 0);

  console.log("1から" + a +  "までの和は" + sumUp(a) + "です。");
})();