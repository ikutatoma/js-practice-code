const { read } = require('fs');

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
  const firstname = await readUserInput("姓:")
  const lastname = await readUserInput("名:")
  console.log("こんにちは" + firstname + lastname + "さん");
})();