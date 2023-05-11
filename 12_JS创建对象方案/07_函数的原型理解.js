function foo() {
    let moni = {}
    this = moni

    this.__proto__ = foo.prototype // 对象的隐士原型,指向函数的显示原型
}

//函数也是一个对象
//函数作为对象来说,它也是有[[prototype]] 隐士原型
console.log(foo.__proto__);

//函数 也是一个函数, 所以他会多出来一个显示原型属性, prototype

console.log(foo.prototype);


let f1 = new foo
let f2 = new foo
f1.__proto__ === foo.prototype
f2.__proto__ === foo.prototype