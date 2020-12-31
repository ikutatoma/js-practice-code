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
    constructor(year, month) {
      this.year = year;
      this.month = month;
    }
    dayOfweek() {
      var date = new Date(this.year, this.month);
      return date.getDay();
      /* return parseInt(year + year / 4 - year / 100 + year / 400 + (13 * month + 8) / 5 + day) % 7;
       */
    }

    isLeap() {
      return this.year % 4 == 0 && this.year % 100 != 0 || this.year % 400 == 0;
    }

    monthDays() {
      if (this.month != 1) {
        return mday[this.month];
      }
      return mday[this.month] + (this.isLeap(this.year) ? 1 : 0);
    }

    putCalendar() {
      var wd = this.dayOfweek();
      // console.log(wd);
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

        if (wd % 7 == 0 && i == mdays) {} else if (wd % 7 == 0) {
          console.log("\n");
        }
      }
    }
  }
  mday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  year = parseInt(process.argv[2]);
  month = parseInt(process.argv[3]) - 1;

  if (isNaN(year) == true && isNaN(month) == true) {
    today = new Date();
    year = today.getFullYear();
    month = today.getMonth();
  }

  var cale = new Calendar(year, month);

  if (isNaN(year) == false && isNaN(month) == false) {
    console.log(year + "年" + (month + 1) + "月のカレンダー");
    cale.putCalendar();
  } else {
    console.log(year + "年のカレンダー");
    for (month = 0; month <= 11; month++) {
      console.log(`\n\n${month + 1}月のカレンダー`);
      cale = new Calendar(year, month)
      cale.putCalendar();
    }
  }
})();