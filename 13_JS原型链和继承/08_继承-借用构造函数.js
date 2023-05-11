//解决第三个弊端，可以接收参数

//父类：公共属性和方法
//开始没有传递参数都为 undefined
function Person(name, age, friends) {
  console.log(6,this);
  (this.name = name), (this.friends = friends);
  this.age = age;
}

Person.prototype.eating = function () {
  console.log(this.name + 'eating~');
};
//子类：特有的属性和方法

function Student(name, age, friends) {
  console.log(this);
  Person.call(this, name, age, friends);
  this.sno = 111;
}

let p = new Person();

Student.prototype = p;
Student.prototype.studying = function (params) {
  console.log(this.name + 'studying~');
};

let stu = new Student('thunder', 12, ['thunderchen']);

console.log(stu); //Person { name: 'thunder', friends: [], sno: 111 }
console.log(32,p.__proto__studying);
let stu1 = new Student('thudner', 18, ['why']);
let stu2 = new Student('thudner', 20, ['clearlove']);
stu1.friends.push("thunderchen")
console.log(stu1.friends);
console.log(stu2.friends);


//借用构造函数存在的弊端：
//1. Person 函数至少会被调用两次
//2. stu的原型上会多出一些属性，但是这些属性是没有存在的必要的。