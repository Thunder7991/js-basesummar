function Person(name,age) {
    this.name = name
    this.age = age
}

console.log(Person.prototype); // {}

console.log(Object.getOwnPropertyDescriptors(Person.prototype))

let p1 = new Person('thuhder',18)
console.log(Person.prototype.__proto__)
console.log(Person.prototype.__proto__.__proto__)
