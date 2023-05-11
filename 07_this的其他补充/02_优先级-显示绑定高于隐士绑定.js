// var obj = {
//     name: 'obj',
//     foo: function () {
//         console.log(this);
//     }
// }

// obj.foo()

// //1.call / apply的显示绑定高于隐士绑定
// obj.foo.call('abc')
// obj.foo.apply('abc')

// //2.bind 的优先级高于隐士绑定
// var newFoo = obj.foo.bind('bind');
// newFoo()

//更明显的比较
function isFoo(params) {
  console.log(this);
}

var obj = {
  name: 'obj',
  foo: foo.bind('bind'),
};
obj.foo();
