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
  console.log("季節を求めます。");
  do {
    do {
      var a = await readUserInput("何月ですか:");
      var month = parseInt(a);
    } while (month < 1 || month > 12);
    if (month >= 3 && month <= 5) {
      console.log("それは春です。")
    }
    else if (month >= 6 && month <= 8) {
      console.log("それは夏です。")
    }
    else if (month >= 9 && month <= 11) {
      console.log("それは秋です。")
    }
    else if (month == 12 || month == 1 || month == 2) {
      console.log("それは冬です。")
    }
    var retry = await readUserInput("もう一度? 1...yes/0...no:");
  } while (retry == 1);



})();