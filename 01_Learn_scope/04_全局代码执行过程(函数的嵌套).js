var name = 'thunder';

var num1 = 20;
var num2 = 30;

var result = num1 + num2;

let isFoo = foo(num1, num2);
console.log(isFoo);
function foo(num1, num2) {
  var name = 10;

  function innerFoo(...args) {
    console.log(args);
  }
  innerFoo(num1, num2);
  return num1 + num2;
}

/**
 *
 */
//函数的执行过程:
/**
 *  解析代码的时候,会生成全局对象Global Object,解析到函数的时候,会在内存中开辟一块空间来存储函数(foo:0xa00)即内存空间:包含父级作用域[scope]:parent scope,和
 *            函数的执行体(代码块),当开始执行的时候,去VO:GO查找foo:即内存地址,将函数放到函数调用栈(Execution Context Stack)中,此时并不会直接执行,
 *            会在函数调用栈中创建一个函数执行上下文(Function Execution Context,FEC),里面也会创建VO指向AO(Activation Object),此时开始执行函数的代码,name赋值为10,
 *            执行完毕之后,FEC会弹出执行上下文栈,AO也会销毁掉,如果在执行一下,会在依次创建一次,
 *  var globalObject = {String: '类', Date: '类',window: globalObject,foo:0xa00};
 *  var AO = {name:undefined} //函数内部也有可能定义一些变量
 */

// 变量查找
/**
 * 当我们查找一个变量时,真实的查找路径是沿着作用域链来查找 (scope chain : 作用域链 (AO:当前的AO + 父级作用域(ParentScope )))
 */

//函数的嵌套执行过程
/**
 *  解析到函数内部的嵌套函数(innerFoo:0xb00)时,会再次开辟存储函数的空间(内存地址),当执行innerFoo函数时,有新增一个执行上下文AO ,同理scope chain:AO+ ParentScope.
 *  innerFoo函数执行完毕后,会弹出执行上下文栈,父级函数也会相继弹出
 */
// AO:{innerFoo:0xb00}
