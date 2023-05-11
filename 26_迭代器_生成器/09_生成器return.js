function* eoo(num = 1) {
  console.log('函数开始执行');

  const value1 = 100 * num;

  const n = yield value1;
//   return n

  const value2 = n;

  let n2 = yield value2;

  const value3 = n2;

  let n3 = yield value3;

  return n3;
}

let generator = eoo(5);

console.log(generator.next());
console.log(generator.return(10));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// { value: 500, done: false }
// { value: 10, done: true }
// { value: undefined, done: true }
// { value: undefined, done: true }
// { value: undefined, done: true }


