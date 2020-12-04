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
  const dayJapanese = ["日", "月", "火", "水", "木", "金", "土"];
  const dayEnglish = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  console.log("英語の曜日名を小文字で入力してください。");
  var retry = 0;
  var last= -1;
  do {
    do {
      day = Math.floor(Math.random() * 7);
      console.log(day);
    } while (day == last);
    last = day;
    while (true) {
      var s = await readUserInput(dayJapanese[day] + "曜日:");
      var result = dayEnglish.indexOf(s);
      if (result == day) {
        break;
      }
      console.log("違います。");
    }

    var con = await readUserInput("正解です。もう一度？1...yes/0...no");
    retry = parseInt(con);
  } while (retry == 1)
})();