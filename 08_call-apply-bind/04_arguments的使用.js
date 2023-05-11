// var ao = {
//   num1: undefined,
//   num2: undefined,
//   arguments: {},
// };

function foo(num1, num2, num3) {
  console.log(arguments); //类数组, 可以通过length获取长度,通过index索引来访问. 但是没有数组的方法比如,forEach,map,filter,some,every等 

  var name = 'window';
  console.log(num1, num2, num3);
  //常见的arguments的操作
  console.log(arguments.length);
  //获取某个参数
  console.log(arguments[0]);

  //callee 获取当前arguments所在的函数
  console.log(arguments.callee)
}

foo(1, 1, 1, 3, 4, 5, 6, 7);
