//隐士绑定: object.fn()
//object对象会被JS引擎绑定到fn函数的中的this里面

function foo() {
  console.log(this);
}


//独立函数调用
// foo() //window

// var obj = {
//     name: 'tc',
//     foo: foo
// }
// obj.foo() //obj


//2.案例二
var obj = {
    name: 'tc',
    eating: function () {
        console.log(this.name + '在吃东西');
    },
    running: function () {
        console.log(this.name + '在跑步');
    }
}

obj.eating() // obj
obj.running() // obj

var fn = obj.eating
fn() // window


//3.案例三
var obj1 = {
    foo: function () {
        console.log(this);
    }
}

var obj2 = {
    name:'oabj2',
    bar:obj1.foo
}

obj2.bar() //obj2