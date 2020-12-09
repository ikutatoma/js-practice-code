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
  async function readPlusInt() {
     do {
      var aa = await readUserInput("正の整数値: ");
       var x = parseInt(aa);
       return x;
    } while (x <= 0);
  }
  do {
    var n = await readPlusInt();
    console.log(n);
    console.log("逆に読むと");
    while (n >= 1) {
      console.log(parseInt(n % 10));
      parseInt(n /= 10);
    }
    console.log("です。");
    do {
      var bb = await readUserInput("もう一度？<Yes..1/No..0>");
      var retry = parseInt(bb);
    } while (retry != 1 && retry != 0);
  } while (retry == 1);
})();