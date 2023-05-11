var obj1 = {
    name: 'obj',
    foo: function () {
        console.log(this);
    }
}

var obj2 = {
    name: 'obj2',
};
// obj2.bar = obj1.foo;
// obj2.bar()
//独立函数调用
(obj2.bar = obj1.foo)() //window
