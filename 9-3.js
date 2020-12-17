const { get } = require('http');

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
  class Human {
    constructor(name, height, weight) {
      this.name = name;
      this.height = height;
      this.weight = weight
    }

    getName() {
      return this.name;
    }
    getHeight() {
      return this.height;
    }
    getWeight() {
      return this.weight;
    }
    gainWeight(w) {
      this.weight += w;
    }
    reduceWeight(w) {
      this.weight -= w;
    }
    printHumanArray(a) {
      for (var i = 0; i < a.length; i++) {
        console.log("No." + i + " " + a[i].getName() + " " + a[i].getHeight() + " " + a[i].getWeight());
      }
    }
  }

  var p = new Array;
  p[0] = new Human("桑野慎一郎", 170, 70);
  p[1] = new Human("高原徹也", 169, 59);

  console.log(p[0].getName);



  var n = Number(await readUserInput("配列qの要素数: "));

  let q = new Array(n);

  for (var i = 0; i < q.length; i++) {
    console.log("q[" + i + "]");
    var name = Number(await readUserInput("名前: "));
    var height = Number(await readUserInput("身長: "));
    var weight = Number(await readUserInput("体重: "));
    q[i] = new Human(name, height, weight);
  }

  let x = new Array;
  x[1] = [new Human("竹田祥平", 175, 52), new Human("橋川智之", 169, 60)];
  x[2] = [new Human("三宅秀樹", 178, 70), new Human("小林佑介", 165, 59)];
  x[3] = [new Human("白水祐亮", 168, 59), new Human("田中大喜", 165, 59)];

  var n = Number(await readUserInput("配列yの行数: "));
  var y = new Array(n);
  for (var i = 0; i < y.length;i++){
    var n = Number(await readUserInput("y[" + i + "]の列数: "));
    y[i] = new Array(n);

    for (var j = 0; j < y[i].length; j++){
      console.log("y[" + i + "][" + j + "]");
      var name = Number(await readUserInput("名前: "));
      var height = Number(await readUserInput("身長: "));
      var weight = Number(await readUserInput("体重: "));
      y[i][j] = new Human(name, height, weight);
    }
  }

  console.log("・配列p");
  printHumanArray(p);
  console.log("・配列q");
  printHumanArray(q);


  console.log("・配列x");
  for (var i = 0; i < x.length; i++){
    console.log("第" + 1 + "行目");
    printHumanArray(x[i]);
  }
  console.log("・配列y");
  for (var i = 0; i < y.length; i++){
    console.log("第" + 1 + "行目");
    printHumanArray(y[i]);
  }
})();