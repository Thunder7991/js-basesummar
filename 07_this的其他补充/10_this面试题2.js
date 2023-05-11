var name = 'window';

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name);
    };
  },
  foo4: function () {
    return () => console.log(this.name);
  },
};

var Person2 = { name: 'person2' };

person1.foo1(); //person1   隐士绑定

person1.foo1.call(Person2); //call 显示绑定与隐士绑定同时存在, person2

person1.foo2(); //箭头函数  window
person1.foo2.call(Person2); //箭头函数 window

person1.foo3()(); //独立函数调用, 直接指向window
person1.foo3.call(Person2)(); //独立函数调用, 直接指向window
person1.foo3().call(Person2); //person2(最终调用返回函数,使用的是显示绑定)

person1.foo4()(); //persion1 (箭头函数不绑定this,上层作用域this是persion1)
person1.foo4.call(Person2)(); //person2(最终调用返回函数,使用的是显示绑定)
person1.foo4().call(person2); //persion1 (上层找到的persion1)
