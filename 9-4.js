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
    constructor(year,month,date) {
      this.year = year;
      this.month = month;
      this.date = date;
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
    setYear(year) {
      return this.year = year;
    }
    setMonth(month) {
      return this.month = month;
    }
    setYear(date) {
      return this.date = date;
    }
    set(year,month,date) {
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
      return (y + y / 4 - y / 100 + y / 400 + (13 * m + 8) / 5 + date) % 7;
    }
    equalTo(d) {
      return this.year == d.year && this.month == d.month && this.date == d.date;
    }
    toString() {
      var wd = ["日", "月", "火", "水", "木", "金", "土"];
      return console.log("%04d年%02d月%02d日(%s)", year, month, date, wd[dayOfWeek()]);
    }
  }



})();