//this指向什么,和喊出所处的位置没有关系
//跟函数被调用的方式是有关系

function foo() {
    console.log(this);
}
//1.直接调用
foo()

//2.创建一个对象,对象后的函数指向foo
var obj = {
    name:'tc',
    foo:foo
}
obj.foo()

//3.apply调用

foo.apply('abc')