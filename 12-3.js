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
  let ExCar = require('./12-1');
  var myCar = new ExCar("W140", 1885, 1490, 5220, 95.0, new Date(2005, 10, 13));
  myCar.putSpec();
})();