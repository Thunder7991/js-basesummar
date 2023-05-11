function Person() {}
let  p = new Person()
console.log(p instanceof Person); //只能传递 构造函数
console.log(p);
console.log(Person.prototype.isPrototypeOf(p)); //用于检测某个对象，是否出现在某个实例对象的原型链上
let obj  = {
    name:"thunder",
    age:18
}
let info = Object.create(obj)
console.log(info);
console.log(obj.isPrototypeOf(info));