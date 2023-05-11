// let obj1 = {} //创建一个对象
// let obj2 = new Object() //创建了一个对象

// function Person() {

// }
// let p = new Person()

let obj = {
  name: 'thunder',
  age: 18,
};

let obj2 ={
    address:"北京市"
}
obj.__proto__ = obj2

//Object.prototype
// console.log(obj.__proto__);
// console.log(Object.prototype);
// console.log(obj.__proto__ === Object.prototype);


// Object
console.log(Object.prototype); //[Object: null prototype] {}
console.log(Object.prototype.constructor);//指向Object函数

console.log(Object)
console.log(Object.getOwnPropertyDescriptors(Object));
console.log(Object.__proto__ === Object.prototype.constructor);//false
//总结一下吧：
// 通过 字面量 / new Object()
console.log(Object.__proto__)




