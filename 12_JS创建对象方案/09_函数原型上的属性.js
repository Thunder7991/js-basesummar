function foo() {}
console.log(foo.prototype);
console.log(Object.getOwnPropertyDescriptors(foo.prototype));

// Object.defineProperty(foo.prototype,"constructor",{
//     enumerable:true,
//     configurable:true,
//     writable:true,
//     value:"哈哈"
// })

console.log(foo.prototype);

//foo.prototype  中有一个constructor属性

console.log(foo.prototype.constructor); //[Function: foo]
console.log(foo.prototype.constructor.name); //函数名字

foo.prototype.age = 12;
foo.prototype.height = 18;
console.log(foo.age);

//直接修改整个prototype 对象, 批量在原型上添加属性
foo.prototype = {
  // constructor:foo,
  big: 18,
  long: 18,
};

let f2 = new foo();
console.log(f2.big);

//真实开发中我们可以通过Object.defineProperty 方法添加constructor
Object.defineProperty(foo.prototype, 'constructor', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo,
});
