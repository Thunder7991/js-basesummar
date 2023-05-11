function foo(params) {
  console.log(this);
}

//apply / call /bind :当 传入 null / undefined 时,自动将this绑定到全局对象

foo.apply(null) //window
foo.apply(undefined) //window

var bar = foo.bind(null);
bar() //window
