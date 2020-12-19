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

  class Day{
    constructor(year,month,day) {
      this.year = year;
      this.month = month;
      this.day = day;
    }
  }

  class Human extends Day {
    constructor(name, height, weight,birthday) {
      this.name = name;
      this.height = height;
      this.weight = weight
      this.birthday = new Day(birthday);
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
    getBirthday() {
      return new Day(this.birthday);
    }
    gainWeight(w) {
      this.weight += w;
    }
    reduceWeight(w) {
      this.weight -= w;
    }
    putData() {
      console.log("名前" + this.name);
      console.log("身長" + this.height + "cm");
      console.log("体重" + this.weight + "kg");
    }
    toString() {
      return "{" + ":" + this.height + "cm" + this.weight + "kg" + this.birthday + "生まれ}";
    }
  }


  var suzuki = new Human("鈴木二郎", 170, 60, new Day(1975, 3, 12));
  var takada = new Human("高田龍一", 166, 72, new Day(1987, 10, 7));

  console.log("suzuki = " + suzuki);
  console.log("takada = " + takada);

})();