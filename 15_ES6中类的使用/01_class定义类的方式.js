//类的声明
class Person {

}
//类的表达式
// let Animal = class {

// }

//类的特点
console.log(typeof Person); //function
console.log(Person.prototype);//{}
console.log(Person.prototype.__proto__);//[Object: null prototype] {}
console.log(Person.prototype.constructor);//[class Person]
console.log(Person.__proto__);//{}

// function Person() {}
let p = new Person()
console.log(p.__proto__ === Person.prototype); //true






