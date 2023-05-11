
const iterableObj = {
  names: [1, 2, 3],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next:  ()=> {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};
let iterator = iterableObj[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let iterator1 = iterableObj[Symbol.iterator]()
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

for (const item of iterableObj) {
    console.log(item);
}


