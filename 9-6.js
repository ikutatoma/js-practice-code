const {
  SSL_OP_SSLEAY_080_CLIENT_DH_BUG
} = require('constants');

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
  lastYear = 0;
  class Birthday {
    constructor(year, month, date) {
      this.year = year;
      this.month = month;
      this.date = date;
    }
    dayOfWeek() {
      var y = this.year;
      var m = this.month;

      if (m == 1 || m == 2) {
        y--;
        m += 12;
      }
      return parseInt((y + y / 4 - y / 100 + y / 400 + (13 * m + 8) / 5 + this.date) % 7);
    }
    toString() {
      var wd = ["日", "月", "火", "水", "木", "金", "土"];
      return this.year + "年" + this.month + "月" + this.date + "日(" + wd[this.dayOfWeek()] + ")生まれ";
    }

  }

  class Human {
    constructor(name, height, weight, birthday) {
      this.name = name;
      this.height = height;
      this.weight = weight;
      this.birthday = birthday;
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
    putData() {
      console.log("名前" + this.name);
      console.log("身長" + this.height + "cm");
      console.log("体重" + this.weight + "kg");
    }
    getBirthday() {
      return this.birthday;
    }
    toString() {
      return "{" + this.name + ":" + this.height + "cm " + this.weight + "kg" + this.birthday;
    }
  }

  var suzuki = new Human("鈴木二郎", 170, 60, new Birthday(1975, 3, 12));
  var takada = new Human("高田龍一", 166, 72, new Birthday(1987, 10, 7));


  console.log("suzuki = " + suzuki);
  console.log("takada = " + takada);
})()