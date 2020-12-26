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
  class player{
  }
  class HumanPlayer extends player{

    async nextHand() {
      do {
        var hand = await readUserInput("じゃんけんポン!! 0..グー/1..チョキ/2..パ- : ");
      } while (hand < 0 || hand > 2);
      return hand;
    }
  }

  class ComputerPlayer extends player{
    nextHand() {
      return Math.floor(Math.random() * 3);
    }
  }
  module.exports = player;
  module.exports = HumanPlayer;
  module.exports = ComputerPlayer;

})();