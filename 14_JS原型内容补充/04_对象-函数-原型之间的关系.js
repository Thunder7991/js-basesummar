let obj = {
    name:"thunder"
}

console.log(obj.__proto__);
//对象中有一个__proto__对象,隐士原型对象
function Foo() {
    
}
//Foo函数是一个函数,那么他会一个显示原型对象, Foo.prototype
//Foo.prototype来自哪里?
//答案:创建一个函数,Foo.prototype = {constructor:Foo}

// let Foo = new Function()
//Foo 也是一个对象,那么他会有一个隐士原型对象: Foo.__proto__
//Foo.__proto__ 来自哪里?
//答案: new Function() Foo.__proto__ = Funciton.prototype
//Function.prototype = {constructor:Function}


console.log(Foo.prototype === Foo.__proto__) //false
console.log(Foo.prototype.constructor); //[Function: Foo]
console.log(Foo.__proto__.constructor); //[Function: Function]


