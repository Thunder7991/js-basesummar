function foo (){
console.log('foo');
let newobj = {}
newobj.__proto__ = foo.prototype
this = newobj
}

//foo是一个普通的函数
foo()

// 通过new关键字调佣foo函数, 那么这个函数就是一个构造函数了
new foo()

new foo


let f1 = new foo
console.log(f1);
//通过new去调用一个函数时,发生了什么?

/**
 *  在内存中创建一个新的对象(空对象)
 * 
 * 在对象内部的[[prototype]]属性会被赋值为该构造函数的prototype
 * 
 * 构造函数内部的this, 会指向创建出来的新对象
 * 
 * 执行函数内部的代码
 * 
 * 如果构造函数没有返回非空对象,则返回创建出的新对象
 */