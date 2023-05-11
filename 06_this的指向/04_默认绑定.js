//案例1

// function foo() {
//     console.log(this);
// }

// foo()

//案例2

// function foo1() {
//   console.log(this);
// }

// function foo2() {
//   console.log(this);
//   foo1()
// }

// function foo3() {
//   console.log(this);
//   foo2()
// }

// foo3()

//案例3

// var obj = {
//     name:'tc',
//     foo:function(){
//         console.log(this);
//     }
// }
// var bar = obj.foo
// bar()  //window

//案例4
// function foo(){
//     console.log(this); 
// }
// var obj = {
//     name:'tc',
//     foo:foo
// }
// var bar = obj.foo
// bar() //window


//案例5
// 该看1:44
function foo() {
    function bar() {
        console.log(this);
    }
}

var fn = foo()
fn() //this 指向window

var obj = {
    name:'tc',
    eating:fn
}
obj.eating() //隐士绑定 此时this指向obj



