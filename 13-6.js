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
  let player = require('./13-5');
  let HumanPlayer = require('./13-5');
  let ComputerPlayer = require('./13-5');

  var hp = new HumanPlayer();
  var cp = new ComputerPlayer();
  var hands = ["グー", "チョキ", "パー"];
  var retry;
  do {
    var comp = cp.nextHand();
    var user = hp.nextHand();
    console.log("私は" + hands[comp] + "で,あなたは" + hands[user] + "です。");

    var judge = (user - comp + 3) % 3;
    switch (judge) {
      case 0:
        console.log("引き分けです。");
        break;
      case 1:
        console.log("あなたの負けです。");
        break;
      case 2:
        console.log("あなたの勝ちです。");
        break;
    }
    do {
      retry = parseInt(await readUserInput("もう一度?(0)いいえ(1)はい:"));
    } while (retry != 0 && retry != 1);
  } while (retry == 1);
})();