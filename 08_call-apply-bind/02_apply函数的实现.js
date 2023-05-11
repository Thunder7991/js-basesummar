Function.prototype.tcapply = function (thisArg, args) {
  //执行调用的那个函数(sum)
  //1.获取需要被执行的函数
  var fn = this;
  //1.1处理边界(传递的参数为非对象)
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  //2.调用需要被执行的函数
  thisArg.fn = fn;
  var result;
  if (!args) {
    result = thisArg.fn();
  } else {
    result = thisArg.fn(...args);
  }

  // ===>  或者

  delete thisArg.fn;
  //3-返回结果
  return result;
};

function sum(sum1, sum2) {
  console.log('sum函数被执行', this, sum1, sum2);
  return sum1 + sum2;
}

// let result = sum.apply(null, [1, 2]);
// console.log(result);

//自己实现调用
var result = sum.tcapply(0, [1, 2]);
console.log(result);

var result2 = sum.tcapply('abc');
console.log(result2);

//edge case (边界判断)

