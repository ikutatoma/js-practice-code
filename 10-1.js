const {
  countReset
} = require('console');

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
      this.weight = weight;
      this.id = id++;
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
    getId() {
      return this.id;
    }
    putData() {
      console.log("名前:" + this.name);
      console.log("身長:" + this.height + "cm");
      console.log("体重:" + this.weight + "kg");
    }
  }

  id = 1;
  var suzuki = new Human("鈴木二郎", 170, 60);
  var takada = new Human("高田龍一", 166, 72);
  suzuki.putData();
  console.log("番号:" + suzuki.getId());

  takada.putData();
  console.log("番号:" + takada.getId());
})();