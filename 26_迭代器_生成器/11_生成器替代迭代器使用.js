//生成器 替代 迭代器

function* createArrayIterator(arr) {
  //第三种写法
  yield* arr;

  //第二种写法
  //   for (const item of arr) {
  //     yield item;
  //   }
  // 第一种写法
  //   let index = 0;
  //   return {
  //     next: function () {
  //       if (index < arr.length) {
  //         return { done: false, value: arr[index++] };
  //       } else {
  //         return { done: true, value: undefined };
  //       }
  //     },
  //   };
}

const names = [1, 2, 3, 1];
const namesIterator = createArrayIterator(names);
console.log(namesIterator.next());

//2.创建一个函数， 这个函数可以迭代一个范围内的数字
// 10 , 20

function* createRangeIterator(start, end) {
  //第二种
  let index = start;
  while (index < end) {
    yield index++;
  }

  //第一种写法
  //   let index = start;
  //   return {
  //     next: function () {
  //       if (index < end) {
  //         return { done: false, value: index++ };
  //       } else {
  //         return { done: true, value: undefined };
  //       }
  //     },
  //   };
}

const rangeIterator = createRangeIterator(10, 20);
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

//3.class 案例

class Classroom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }
  entry(newName) {
    this.students.push(newName);
  }
  foo = () => {
    console.log(this);
  };
  [Symbol.iterator] = function* () {
    yield* this.students;

    // let index = 0;
    // return {
    //   next: () => {
    //     if (index < this.students.length) {
    //       return {
    //         done: false,
    //         value: this.students[index++],
    //       };
    //     } else {
    //       return { done: true, value: undefined };
    //     }
    //   },
    //   return: () => {
    //     console.log('迭代器提前终止了');
    //     return { done: true, value: undefined };
    //   },
    // };
  };
}

const classroom = new Classroom('thunder', 'chen', ['chen', 'zheng']);

for (const item of classroom) {
  console.log(item);
}
classroom.foo();
