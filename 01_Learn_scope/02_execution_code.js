var name = 'thunder';

var num1 = 20;
var num2 = 30;

var result = num1 + num2;

/**
 * 1.代码被解决,V8 引擎内部会帮助我们创建一个对象 (GlobalObject  -> go)
 * 2.运行代码
 *  2.1 V8为了执行代码,V8引擎内部会有一个执行上下文栈(Execution Context Stack,ECStack)(函数调用栈)
 *  2.2 因为我们执行的是全局代码,为了全局代码正常执行,需要创建全局执行上下文,(Global Execgtion Context)(全局代码需要被执行时才会创建)
 */

var globalObject = {
  String: '类',
  Date: '类',
  window: globalObject,
};
