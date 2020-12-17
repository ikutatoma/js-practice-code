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
  var vitz = new Car("ビッツ", "福岡999ん99-99", 1660, 1500, 3640, 40.0, 35.0, 12.0);
  var march = new Car("マーチ", "福岡999ん99-99", 1660, 1525, 3695, 41.0, 35.0, 12.0);

  vitz.putSpec();
  march.putSpec();

  console.log("車のデータを入力せよ。");
  let name = await readUserInput("名前:");
  let number = await readUserInput("ナンバー:");
  let width = Number(await readUserInput("車幅:"));
  let height = Number(await readUserInput("高さ:"));
  let length = Number(await readUserInput("長さ:"));
  let tank = Number(await readUserInput("タンク容量:"));
  let fuel = Number(await readUserInput("ガソリン量:"));
  let sfc = Number(await readUserInput("燃費:"));

  myCar = new Car(name, number, width, height, length, tank, fuel, sfc);
  while (true) {
    console.log("現在地:(" + myCar.getX() + " " + myCar.getY() + ")");
    console.log("残り燃料:" + myCar.getFuel());
    var retry = parseInt(await readUserInput("移動しますか[0...No/1...Yes]:"));
    if (retry == 0) {
      break;
    }
    var dx = Number(await readUserInput("X方向の移動距離: "));
    var dy = Number(await readUserInput("Y方向の移動距離: "));
    if (!myCar.move(dx, dy)) {
      console.log(燃料不足);
    }
  }
})();