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
  totalMileage = 0;
  class Car{
    constructor(name,width,height,length,fuel,purchaseDay) {
      this.name = name;
      this.width = width;
      this.height = height;
      this.length = length;
      this.fuel = fuel;
      this.purchaseDay = new Date(purchaseDay);
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
    getPurchaseDay() {
      return this.purchaseDay;
    }
    putSpec() {
      console.log("名前:" + this.name);
      console.log("車幅:" + this.width + " mm");
      console.log("車高:" + this.height + "mm");
      console.log("車長:" + this.length + "mm");
    }
    move(dx, dy) {
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > this.fuel) {
        return false;
      }
      else {
        this.fuel -= dist;
        this.x += dx;
        this.y += dy;
        return true;
      }
    }
  }

  class ExCar extends Car{
    constructor(name, width, height, length, fuel, purchaseDay) {
      super(name, width, height, length, fuel, purchaseDay)
      totalMileage = 0.0;
    }
    getTotalMileage() {
      return totalMileage;
    }
    putSpec() {
      super.putSpec();
      console.log("総走行距離:" + totalMileage + "km");
    }
    move(dx, dy) {
      var dist = Math.sqrt(dx * dx + dy * dy);
      console.log(dist);
      if (!super.move(dx, dy)) {
        return false;
      }
      else {
        totalMileage += dist;
        return true;
      }
    }
  }
  module.exports = ExCar;
})();