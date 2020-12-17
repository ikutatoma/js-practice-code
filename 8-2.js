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
  }

  var suzuki = new Human("鈴木二郎", 170, 60);
  var takada = new Human("高田龍一", 166, 72);

  suzuki.gainWeight(3);
  takada.reduceWeight(5);

  console.log("名前" + suzuki.getName());
  console.log("身長" + suzuki.getHeight() + "cm");
  console.log("体重" + suzuki.getWeight() + "kg\n");

  console.log("名前" + takada.getName());
  console.log("身長" + takada.getHeight() + "cm");
  console.log("体重" + takada.getWeight() + "kg");
})();