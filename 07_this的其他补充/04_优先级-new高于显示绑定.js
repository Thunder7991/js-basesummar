//结论 : new关键字不能喝apply / call 一起使用

// new bind  : new 的优先级高于bind显示绑定优先级
function foo(params) {
  console.log(this);
}
var bar = foo.bind('bind');

var obj = new bar(); //打印foo

//new绑定 > 显示绑定(apply/call/bind) > 隐士绑定(obj.foo()) > 默认绑定(独立函数调用)

//bind的优先级更高
obj.bind('abc').call('13213'); // abc 