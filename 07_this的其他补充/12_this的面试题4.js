var name = 'window';

function Persion(name) {
    this.name = name
    this.obj = {
        name: 'obj',
        foo1:function () {
            console.log(this.name);
        },
        foo2:function () {
            return () => {
                console.log(this.name);
            }
        }
    }
}

var persion1 = new Person('persion1');
var persion2 = new Person('persion2');

persion1.obj.foo1()() //window
persion1.obj.foo1.call(persion2)()//window
persion1.obj.foo1().call(persion2) // persion2

persion1.obj.foo2()() //obj(因为会从上级调用)
persion1.obj.foo2.call(persion2)() //persion2(因为会从上级调用)
persion1.obj.foo2().call(persion2) //obj




// var obj = {
//     name: 'obj',
//     foo: function () {
//         //上层的作用域是全局的
//         console.log(this);
//     }
// }

// function Student() {

//     // foo 的上层作用域
//     this.foo = function () {
        
//     }
// }