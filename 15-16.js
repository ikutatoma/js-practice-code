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
    mday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    dayOfweek(year, month, day) {
      if (month == 1 || month == 2) {
        year--;
        month += 12;
      }
      return (year + year / 4 - year / 100 + year / 400 + (13 * month + 8) / 5 + day) % 7;
    }
    isLeap(year) {
      return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    }
    monthDays(year, month) {
      if (month-- != 2) {
        return mday[month];
      }
      return mday[month] + (this.isLeap(year) ? 1 : 0);
    }
    putCalendar(year, month) {
      var wd = this.dayOfweek(year, month, 1);
      var mdays = this.monthDays(year, month);
      console.log("日 月 火 水 木 金 土");
      console.log("-------------------");
      for (var i = 0; i < wd; i++) {
        process.stdout.write("  ");
        for (var i = 1; i <= mdays; i++) {
          process.stdout.write(String(i));
          if (++wd % 7 == 0) {
            console.log("\n");
          }
        }
      }

    }
  }
  var year = 1;
  var month = 1;
  if (process.args.length == 0) {
    var today = Date();
    year = today.getFullYear();
    month = today.getMonth() + 1;
  }
  else {
    if (process.args >= 1) {
      year = parseInt(process.args[0]);
      if (year < 0) {
        console.log("年の指定が不正です。");
        return;
      }
    }
    if (process.args >= 2) {
      month = parseInt(process.args[1]);
      if (month < 1 || month > 12) {
        console.log("月の指定が不正です。");
        return;
      }
    }
  }
  if (process.args.length == 0 || process.args.length >= 2) {
    console.log(year + "年" + month + "月のカレンダー");
    putCalendar(year, month);
  }
  else {
    console.log(year + "年のカレンダー");
    for (month = 1; month <= 12; month++){
      console.log(month + "月");
      putCalendar(year, month);
    }
  }


})();