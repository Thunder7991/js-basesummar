var name = 'window';

function Persion(name) {
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
  };
  this.foo2 = () => console.log(this.name);
  this.foo3 = function () {
    return function () {
      console.log(this.name);
    };
  };
  this.foo4 = function () {
    return () => console.log(this.name);
  };
}

var person1 = new Persion('persion1');
var person2 = new Persion('persion2');

person1.foo1(); // persion1
person1.foo1.call(person2); // persion2


person1.foo2();  //persion1(上层作用域)
person1.foo2.call(person2) //persion1

persion1.foo3()(); //window
persion1.foo3.call(person2)(); //window //独立函数调用
persion1.foo3().call(person2); //persion2

person1.foo4()(); //persion1(箭头函数)

person1.foo4.call(person2)(); //persion2(最终调用返回函数,使用的是显示绑定)

person1.foo4().call(person2); //persion1(上层找到的persion1)

