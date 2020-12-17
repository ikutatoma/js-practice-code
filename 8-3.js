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
  class Car {
    constructor(name, number, width, height, length, tankage, fuel, sfc) {
      this.name = name;
      this.number = number;
      this.width = width;
      this.height = height;
      this.length = length;
      this.tankage = tankage;
      this.fuel = (fuel <= tankage) ? fuel : tankage;
      this.sfc = sfc;
      this.x = 0;
      this.y = 0;
    }
    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
    getFuel() {
      return this.fuel;
    }
    putSpec() {
      console.log("名   前:" + this.name);
      console.log("ナンバー:" + this.number);
      console.log("車   幅:" + this.width + "mm");
      console.log("車   高:" + this.height + "mm");
      console.log("車   長:" + this.length + "mm");
      console.log("タンク :" + this.tankage + "リットル");
      console.log("燃   費:" + this.sfc + "kg/リットル");
    }
    move(dx, dy) {
      let dist = Math.sqrt(dx * dx + dy * dy);
      let f = dist / this.sfc;

      if (f > this.fuel) {
        return false;
      } else {
        this.fuel -= f;
        this.x += dx;
        this.y += dy;
        return true;
      }
    }
    refuel(df) {
      if (df > 0) {
        this.fuel += df;
        if (this.fuel > this.tankage) {
          this.fuel = this.tankage;
        }
      }
    }
  }

})();