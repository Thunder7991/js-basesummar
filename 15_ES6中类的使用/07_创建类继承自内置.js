// class Person {

// }

// class student extends Person {}

class TCArray extends Array {
  firstItem() {
    return this[0];
  }
  lastItem() {
    return this[this.length - 1];
  }
}

let arr = new TCArray(1,2,3)
console.log(arr.firstItem());
console.log(arr.lastItem());