// function foo(arg) {
//     console.log(arg);
// }
// foo(123)

// function foo(aaaa) {
//   aaaa();
// }
// function bar() {
//   console.log('bar');
// }
// foo(bar);

function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2));
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

var m = 20;
var n = 30;

calc(m, n, add);


