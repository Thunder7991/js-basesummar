
let names = ["abac","thunder"]
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._address = '北京市';
  }
  //普通的实例方法
  //创建出来的对象进行访问
  // let p = new Person()
  eating() {
    console.log(this.name + 'eating~');
  }
  running() {
    console.log(this.name + 'running~');
  }

  //类的访问器
  get address() {
    return this._address;
  }
  set address(newAddress) {
    this._address = newAddress;
  }

  //类的静态方法(类方法)
  // Person.randomPerson()
  static randomPerson() {
    let nameIndex =Math.floor(Math.random() * names.length)
    let name = names[nameIndex]
    return new Person(name)
  }
  
}

let p = new Person('thunder', 18);

p.eating();
p.running();
p.address = '保定市';
console.log(p.address);

console.log(20, Object.getOwnPropertyDescriptors(Person.prototype));
// {
//   constructor: {
//     value: [class Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   eating: {
//     value: [Function: eating],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   running: {
//     value: [Function: running],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   address: {
//     get: [Function: get address],
//     set: [Function: set address],
//     enumerable: false,
//     configurable: true
//   }
// }

for (let i = 0; i < 10; i++) {
console.log(Person.randomPerson());
    
}
//访问器
let obj = {
  _name: 'thunder',
  get name() {
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};


console.log(88,obj.name);