// class Person {

// }
// const p1 = new Person()

//案例 创建一个教师类， 创建出来的对象都是可迭代对象

class Classroom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }

  entry(newName) {
    this.students.push(newName);
  }
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.students.length) {
          return {
            done: false,
            value: this.students[index++],
          };
        } else {
          return { done: true, value: undefined };
        }
      },
      return: () => {
        console.log('迭代器提前终止了');
        return { done: true, value: undefined };
      },
    };
  }
}
const myRoom = new Classroom('123', '计算机教师', ['james', 'thunder']);
myRoom.entry('xioaming');

for (const item of myRoom) {
  console.log(item);
  if (item === 'thunder') break;
}

function Person() {}
Person.prototype[Symbol.iterator] = function () {};
