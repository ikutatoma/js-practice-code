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
  class Calendar {
    constructor(year, month, date) {
      this.year = year;
      this.month = month;
      this.date = date;

      if (this.year == void 0 || this.month == void 0 || this.date == void 0) {
        this.year = (this.year == void 0) ? 1 : this.year;
        this.month = (this.month == void 0) ? 1 : this.month;
        this.date = (this.date == void 0) ? 1 : this.date;
      }
    }
    dayOfweek() {
      if (this.month == 1 || this.month == 2) {
        this.year--;
        this.month += 12;
      }
      var date = new Date(year, month);
      return date.getDay();
      /* return parseInt(year + year / 4 - year / 100 + year / 400 + (13 * month + 8) / 5 + day) % 7;
       */
    }

    isLeap() {
      return this.year % 4 == 0 && this.year % 100 != 0 || this.year % 400 == 0;
    }

    monthDays() {
      if (this.month-- != 2) {
        return mday[this.month];
      }
      return mday[this.month] + (isLeap(this.year) ? 1 : 0);
    }


    putCalendar() {
      var wd = this.dayOfweek();
      var mdays = this.monthDays();
      console.log("日 月 火 水 木 金 土");
      console.log("-------------------");
      for (var i = 0; i < wd; i++) {
        process.stdout.write('   ');
      }
      for (var i = 1; i <= mdays; i++) {
        var twoI = ('00' + i).slice(-2);
        process.stdout.write(String(twoI) + " ");
        wd++;
        if (wd % 7 == 0) {
          console.log("\n");
        }
      }
    }
  }
   mday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  year = parseInt(process.argv[2]);
  month =parseInt(process.argv[3]);
  if (process.argv.length == 0) {
    today = new Calendar(new Date());
    year = today.getFullYear();
    month = today.getMonth() + 1;
  }
  console.log(year);
  var cale = new Calendar(year, month);
  console.log(cale)
  if (process.argv.length == 0 || process.argv.length >= 2) {
    console.log(year + "年" + month + "月のカレンダー");
    cale.putCalendar();
  } else {
    console.log(year + "年のカレンダー");
    for (month = 1; month <= 12; month++) {
      console.log(month + "月");
      putCalendar(year, month);
    }
  }
})();