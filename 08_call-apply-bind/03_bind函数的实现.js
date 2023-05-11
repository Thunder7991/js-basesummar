Function.prototype.tcbind = function (thisArg, ...outArgs) {
  //1.获取到真实调用的函数
  var fn = this;

  //2.绑定this
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  function proxyFn(...args) {
   
    thisArg.fn = fn;
    var finalargs = args.concat(outArgs);
    var result = thisArg.fn(...finalargs);
    delete thisArg.fn;
    return result;
  }
  return proxyFn;
};

function foo() {
  console.log('foo函数被执行了', this);
}

// foo.bind('abc')();

function sum(...args) {
  console.log(args);
}

// var newSum = sum.bind('aaa',10,20,30)
// var newSum = sum.bind('aaa')
// var newSum = sum.bind('aaa',10)
// newSum(20,30)

//自定义bind方法

var bar = sum.tcbind('abc', 10, 20, 30);

var result2 = bar();
console.log(result2);
