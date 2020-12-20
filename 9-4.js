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
        if (year == void 0) {
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

    getYear() {
      return this.year;
    }
    getMonth() {
      return this.month;
    }
    getDate() {
      return this.date;
    }
    set(year, month, date) {
      this.year = year;
      this.month = month;
      this.date = date;
      if (year == void 0 || month == void 0 || date == void 0) {
        if (year == void 0) {
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
    equalTo(d) {
      return this.year == d.year && this.month == d.month && this.date == d.date;
    }
    toString() {
      var wd = ["日", "月", "火", "水", "木", "金", "土"];
      return this.year + "年" + this.month + "月" + this.date + "日(" + wd[this.dayOfWeek()] + ")\n";
    }
  }

  console.log("day1を入力せよ。")
  var y = Number(await readUserInput("年: "));
  var m = Number(await readUserInput("月: "));
  var d = Number(await readUserInput("日: "));

  var day1 = new Day(y,m,d);
  day1.set(y, m, d)
  console.log("day1 = " + day1);

  var day2 = new Day();
  day2 = day1;
  console.log("day2をday1と同じ日付として作りました。");
  console.log("day2 = " + day2);

  if (day1.equalTo(day2)) {
    console.log("day1とday2は等しいです。");
  } else {
    console.log("day1とday2は等しくありません。");
  }

  var d1 = new Day();
  var d2 = new Day(2010);
  var d3 = new Day(2010, 10);
  var d4 = new Day(2010, 10, 15);


  console.log("d1 = " + d1);
  console.log("d2 = " + d2);
  console.log("d3 = " + d3);
  console.log("d4 = " + d4);

  var a = new Array(3);
  for (var i = 0; i < a.length; i++) {
    a[i] = new Day();
  }
  for (var i = 0; i < a.length; i++) {
    console.log("a[" + i + "] = " + a[i]);
  }
})();