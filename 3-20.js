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
  const a = await readUserInput("コンピューターが生成した手:")
  const hand = parseInt(a)
  switch (hand) {
    case 0: console.log("グー"); break;
    case 1: console.log("チョキー"); break;
    case 2: console.log("パー"); break;
  }
})();