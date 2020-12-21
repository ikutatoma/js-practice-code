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
  class MinMax {
    min(a, b, c) {
      var min = a;
      if (b < min) {
        min = b;
      }
      if (c == void 0) {
        return min;
      }
      if (c < min) {
        min = c;
      }
      return min;
    }
    minArray(a) {
      var min = a[0];
      for (var i = 1; i < a.length; a++){
        if (a[i] > min) {
          min = a[i];
        }
      }
      return min;
    }
    minIndexArray(a) {
      var min = this.minArray(a);
      var count = 0;
      for (var i = 0; i < a.length ; i++){
        if (a[i] == min) {
          count++;
        }
      }
      var c = new Array(count--);
      for (var i = a.length - 1; count >= 0; i--){
        if (a[i] == min) {
          c[count--] = i;
        }
      }
      return c
    }
    max(a, b, c) {
      var max = a;
      if (max < b) {
        max = b;
      }
      if (c == void 0) {
        return max;
      }
      if (max < c) {
        max = c;
      }
      return max;
    }
    maxArray(a) {
      var max = a[0];
      for (var i = 1; i < a.length; i++){
        if (a[i] > max) {
          max = a[i];
        }
      }
      return max;
    }
    maxIndexArray(a) {
      var max = this.maxArray(a);
      var count = 0;
      for (var i = 0; i < a.length ; i++){
        if (a[i] == max) {
          count++;
        }
      }
      var c = new Array(count--);
      for (var i = a.length - 1; count >= 0; i--){
        if (a[i] == max) {
          c[count--] = i;
        }
      }
      return c
    }
  }
})();