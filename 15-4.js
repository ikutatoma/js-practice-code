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
  var aa = await readUserInput("文字列: ");
  s = aa.split('');
      process.stdout.write("逆から読むと");
  for (var i = s.length - 1; i >= 0; i--){
    process.stdout.write(s[i]);
  }
 process.stdout.write("です。\n")
})();