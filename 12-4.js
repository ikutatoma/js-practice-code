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
  let Car = require('./12-1');
  let ExCar = require('./12-1');
  var car1 = new Car("W140", 1885, 1490, 5220, 95.0, new Date(2005, 10, 13));
  var car2 = new ExCar("W221", 1845, 1490, 5205, 90.0, new Date(2010, 12, 24));

  var x = car1;
  console.log("xの購入日:" + x.getPurchaseDay());
  var y = car2;
  console.log("yの購入日:" + x.getPurchaseDay());
  console.log("yの総走行距離:" + y.getTotalMileage());
})();