function Person(name, age, heigh, address) {
    this.name = name
    this.age = age 
    this.heigh = heigh
    this.address  = address
}

Person.prototype.eating = function() {
    console.log(this.name + "在吃饭!");
}

let p1 = new Person('why', 18, 1.22, '北京市');
let p2 = new Person('thunder', 18, 1.22, '北京市');


