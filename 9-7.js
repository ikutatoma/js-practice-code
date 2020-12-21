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

  class Day {
    constructor(year, month, date) {
      this.year = year;
      this.month = month;
      this.date = date;

      if (year == void 0 || month == void 0 || date == void 0) {
        if (year != typeof Number || year == void 0) {
          this.year = 1;
        }
        if (month == void 0) {
          this.month = 1;
        }
        if (date == void 0) {
          this.date = 1;
        }
      }
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
      return this.year + "年" + this.month + "月" + this.date + "日(" + wd[this.dayOfWeek()] + ")\n";
    }
  }

  class Period {
    constructor(from, to) {
      this.from = from;
      this.to = to;
    }
    getFrom() {
      return new Day(this.from);
    }
    getTo() {
      return new Day(this.to);
    }

    toString() {
      return "{" + this.from + "〜" + this.to + "}";
    }
  }

  var meiji = new Period(new Day(1868, 9, 8), new Day(1912, 7, 30));
   var taisho = new Period(new Day(1912, 7, 30), new Day(1989, 12, 25));
   var shouwa = new Period(new Day(1926, 12, 25), new Day(1989, 1, 18));




   console.log("\n明治 = " + meiji);
   console.log("\n大正 = " + taisho);
   console.log("\n昭和 = " + shouwa);


})();