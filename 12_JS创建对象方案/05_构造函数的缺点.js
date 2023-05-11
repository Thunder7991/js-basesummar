function foo() {
  function bar() {}
  return bar;
}

let fn1 = foo();
let fn2 = foo();


console.log(fn1===fn2); //false 不是同一个对象

