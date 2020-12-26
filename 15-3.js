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
  s1 = null;
  s2 = " ";
  s3 = "ABC";
  s4 = "ABC";
  s5 = "ABC";
  s5 = "XYZ";
  console.log("s1 = " + s1);
  console.log("s2 = " + s2);
  console.log("s3 = " + s3);
  console.log("s4 = " + s4);
  console.log("s5 = " + s5);
  console.log("s3とs4は同じ文字リテラルを参照")
  console.log((s3 == s4) ? "している" : "していない。");
})();