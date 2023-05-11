// function foo() {
//         const value1 = 100
//         console.log(value1);

//         const value2 = 200
//         console.log(value2);

//         const values = 300
//         console.log(values);
// }
// foo()

//yield 前面的代码为第一段代码
// 当遇到 reutrn 的时候生成器停止执行
function* eoo() {
  console.log('函数开始执行');

  const value1 = 100;
  console.log(value1);
  yield value1;

  const value2 = 200;
  console.log(value2);
  yield value2;

  const value3 = 300;
  console.log(value3);
  yield value3;
}
// eoo().next()

const generator = eoo();
console.log(generator.next())
