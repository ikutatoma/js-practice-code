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
  let c = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let s1 = "ABC";
  let s2 = new Array();
  let s3 = new Array(c);
  let s4 = [c, 5, 3];
  let s5 = ["XYZ"]
  let s6 = [await readUserInput("文字列: ")];
  console.log("s1 = " + s1);
  console.log("s2 = " + s2);
  console.log("s3 = " + s3);
  console.log("s4 = " + s4);
  console.log("s5 = " + s5);
  console.log("s6 = " + s6);
})();