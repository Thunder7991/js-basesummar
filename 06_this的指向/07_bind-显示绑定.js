// var obj = {
//     foo: function () {
//         console.log(this);
//     }
// }

// obj.foo.call('abc')

function foo() {
  console.log(this);
}
// foo.call('78979');

//默认绑定和显示绑定bind冲突:优先级(显示绑定>默认绑定)
var newFoo = foo.bind('bind');
newFoo()

