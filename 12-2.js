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
  console.log("現在位置:(" + myCar.getX() + "," + myCar.getY() + ")");
  console.log("残り燃料:" + myCar.getFuel() + "リットル");
  console.log("購入日:" + myCar.getPurchaseDay());
})();