function* eoo(num) {
  console.log('函数开始执行');

  const value1 = 100 * num;
  console.log(5, value1);
  const n = yield value1;
  console.log(7, n);
  const value2 = n;
  console.log(9, value2);
  let n2 = yield value2;

  const value3 = n2;
  console.log(13, value3);
  let n3 = yield value3;

  return n3;
}

let generator = eoo(5);

console.log(generator.next());
console.log(generator.next(25));
console.log(generator.next(30));
console.log(generator.next(30));



