//父类：公共属性和方法
function Person() {
    this.name = "thunder",
    this.friends = []
}
Person.prototype.eating = function () {
    console.log(this.name + "eating~");
}
//子类：特有的属性和方法
function Student() {
    this.sno = 111
}
let p = new Person()
Student.prototype = p
Student.prototype.studying = function (params) {
    console.log(this.name + "studying~");
}

let stu = new Student()
console.log(stu.name);
console.log(stu.eating());

//原型链的三个弊端

//第一个弊端： 打印stu对象， 某些属性是看不到的
console.log(stu); //Person { sno: 111 }

//第二个弊端：创建出来两个stu的对象
let stu1 = new Student()
let stu2 = new Student()
console.log(stu1.friends);
console.log(stu2.friends);
//直接修改对象上的属性，是给对象本省添加了一个属性，
stu1.name = "kobe"
console.log(35,Object.hasOwn(stu1,'name'));
console.log(stu2.name);
console.log(37,Object.hasOwn(stu2,'name'));
//获取引用，修改引用中的值，会互相影响
stu1.friends.push("thunder")
//如果说我们直接  stu1.friends = [] 是么有问题的
console.log(stu1.friends);
console.log(stu2.friends);

//第三个弊端：在前面实现类的过程中都没有传递参数
let stu3 = new Student("thunder",18)