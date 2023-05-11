/**
 * 函数的作用域和调用位置没有关系,只和定义位置有关
 */


var message = 'hello thunder';

function foo() {}

function bar() {
  var message = 'hello bgr';
}

bar();

function demo() {}


