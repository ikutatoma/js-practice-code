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
  var monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log("英語の月名を入力してください。");
  console.log("なお、先頭は大文字で、２文字目以降は小文字とします。");
  var retry = 0;
  var last = -1;
  do {
    var month = 0;
    do {
      month = Math.floor(Math.random() * 12);
    } while (month == last);
    last = month;
    while (true) {
      var s = await readUserInput((month + 1) + "月:");
      var result = monthString.indexOf(s);
      if (result == month) {
        break;
      }
      console.log("違います。")
    }
    var con = await readUserInput("正解です。もう一度？ 1...yes/0...no:");
    retry = parseInt(con);
  } while (retry == 1);

})();