Function.prototype.tcApply = function (applythis, args) {
  let fn = this;
  let innerapplythis =
    applythis !== null && applythis !== undefined ? Object(applythis) : window;
  //调用函数
  innerapplythis.fn = fn;

  let result = null;
  if (!args) {
    result = innerapplythis.fn();
  } else {
    result = innerapplythis.fn(...args);
  }
  delete innerapplythis.fn;
  return result;
};

function foo(arg1, arg2) {
  console.log(this.age + '岁');
  console.log(arg1, arg2 + '参数是我');
}

let testfoo = foo.tcApply({ age: '18' }, [1, 2]);
console.log(testfoo);
