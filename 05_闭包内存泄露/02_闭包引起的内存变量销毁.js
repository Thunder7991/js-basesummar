/**
 *  V8 会将闭包中未使用的父级作用域中的变量进行销毁
 * @returns 
 */

function foo() {
  var name = 'tc';
  var age = 18; //被销毁
  function bar() {
    console.log(name);
    // console.log(age);
    
  }
  return bar;
}
var fn = foo();

fn();
