function Person() {
    
}

let p1 = new Person
let p2 = new Person


p1.__proto__ === Person.prototype // true
p2.__proto__ === Person.prototype //true

p1.__proto__.name = "thunder" //实际上是在Person函数中添加了 name属性
// 或者
// Person.prototype.name = "clearlove"
p1.name = "clearlove"

console.log(p1.name);