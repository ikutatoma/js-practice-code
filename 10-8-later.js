const {
  countReset
} = require('console');
const {
  exitCode
} = require('process');

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
  //途中まで出来てる。
  //長すぎたためあとで
  class myDate {
    constructor(x) {
      this.x = x;
    }
    //[1]のメソッド
    infoOfDate() {
      console.log((this.leapYear() == true) ? "閏年です。" : "閏年ではありません。");
      console.log("年内経過日数: " + this.spendDays());
      console.log("年内残り日数:" + this.remainDays());
    }
    whetherleapArray() {
      var y = this.x.getFullYear();
      if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0) {
        return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      } else {
        return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      }
    }
    leapYear() {
      var a = this.whetherleapArray();
      if (a[1] == 29) {
        return true;
      } else {
        return false;
      }
    }
    spendDays() {
      var month = this.x.getMonth() //1月を0とした配列
      var days = this.x.getDate()
      var a = this.whetherleapArray()
      var sum = 0;
      for (var i = 0; i < month; i++) {
        sum += a[i];
      }
      sum += days;
      return sum;
    }
    remainDays() {
      var sum = this.spendDays();
      var remain = 365 - sum;
      return remain;
    }
    //[2]のメソッド
    cangeDate() {
      do {
        var change = parseInt(await readUserInput(
          "[1]年月日を変更 [2]年を変更\n" +
          "[3]月を変更    [4]日を変更\n" +
          "[5]1日進める   [6]1日戻す\n" +
          "[7]n日進める   [8]n日戻す"))
      } while (menu < 1 || menu > 8)
      if (change == 1 || change == 2) {
        var changeYear = await readUserInput("年: ");
      }
      if (change == 1 || change == 3) {
        var changeMonth = await readUserInput("月: ");
      }
      if (change == 1 || change == 4) {
        var changeDate = await readUserInput("日: ");
      }
      if (change == 7 || change == 8) {
        var n = await readUserInput("何日: ");
      }
      switch (change) {
        case 1:
          x = new myDate(new Date(ChangeYear, firstMonth, firstDate));
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
      }
    }


    weekOfDay() {
      var a = ["日", "月", "火", "水", "木", "金", "土"];
      return a[this.x.getDay()];
    }
    toString() {
      console.log(this.x.getFullYear() + "年 " + (this.x.getMonth() + 1) +
        "月" + this.x.getDate() + "日(" + this.WeekOfDay() + ")");
    }
  }
  console.log("日付を入力せよ。");
  var firstYear = await readUserInput("年: ");
  var firstMonth = parseInt(await readUserInput("月: ") - 1);
  var firstDate = await readUserInput("日: ");
  x = new myDate(new Date(firstYear, firstMonth, firstDate));

  while (true) {
    do {
      var menu = parseInt(await readUserInput("[1]日付に関する情報を表示 [2]日付を変更 [3]他の日付との比較\n" + "[4]前後の日付を求める [5]終了"));
    } while (menu < 1 || menu > 5)
    if (menu == 5) {
      break;
    }
    switch (menu) {
      case 1:
        x.infoOfDate();
      case 2:
        x.changeDate();
      case 3:
      case 4:
    }
  }


})();