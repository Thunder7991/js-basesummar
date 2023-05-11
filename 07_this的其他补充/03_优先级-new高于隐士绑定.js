var obj = {
    name: 'obj',
    foo: function () {
        console.log(this);
    }
}


//new的优先级高于隐士绑定
var f = new obj.foo();