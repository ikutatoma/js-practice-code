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
  var cp1 = new ComputerPlayer();
  var cp2 = new ComputerPlayer();

  var hands = ["グー", "チョキ", "パー"];
  var retry;
  do {
    var comp1 = cp1.nextHand();
    var comp2 = cp2.nextHand();

    var user = hp.nextHand();
    console.log("コンピューター1は" + hands[comp1] + "で、コンピューター2は" + hands[comp2] + "で、あなたは" + hands[user] + "です。");
    var r1 = (user - comp1 + 3) % 3;
    var r2 = (user - comp2 + 3) % 3;
    if (r1 == 2 && r2 == 2) {
      console.log("あなたの勝ちです。");
    } else if (r1 == 1 && r2 == 0) {
      console.log("コンピューター1の勝ちです。");
    } else if (r1 == 0 && r2 == 1) {
      console.log("コンピューター2の勝ちです。");
    } else if (r1 == 0 && r2 == 2) {
      console.log("あなたとコンピューター1の勝ちです。");
    } else if (r1 == 2 && r2 == 0) {
      console.log("あなたとコンピューター2の勝ちです。");
    } else if (r1 == 1 && r2 == 1) {
      console.log("コンピューター1とコンピューター2の勝ちです。");
    }
    else {
      console.log("引き分けです。");
    }
    do {
      retry = parseInt(await readUserInput("もう一度？ (0)いいえ(1)はい: "));
    } while (retry != 0 && retry != 1)
  } while (retry == 1);
})();