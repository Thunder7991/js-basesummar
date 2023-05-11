Function.prototype.tcCall = function (innerthis, ...args) {
  console.log(this, innerthis, args);
  //获取被调用的函数foo，也就是this
  let fn = this;
  //获取绑定的对象，判断类型
  let callThis =
    innerthis !== null || innerthis !== undefined ? Object(innerthis) : window;
  //调用函数
  callThis.fn = fn;
  let result = callThis.fn(...args);
  delete callThis.fn;
  return result;
};
function foo(...args) {
  console.log(this.name + '是我');
  console.log(args + '参数是我');
}
let testfoo = foo.tcCall({ name: 'thunder' }, 1, 2, 3);
console.log(testfoo);
