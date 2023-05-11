function* foo() {
  console.log('代码开始执行');

  const value1 = 100;
  try {
    yield value1;
  } catch (error) {
    console.log(error);
    yield 'thudner';
  }

  const value2 = 200;
  yield value2;
  console.log('代码执行结束');
}

const generator = foo();
let result = generator.next();
console.log(19, result);

console.log(generator.throw());
