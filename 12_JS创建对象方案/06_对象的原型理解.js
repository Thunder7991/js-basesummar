let obj = {name:"thunder"} //[[prototype]]

console.log(obj.__proto__)

let obj2 = {name:"thuner",__proto__:{}}

//
console.log(Object.getPrototypeOf(obj))


//对象中, 都有一个[[prototype]], 这个属性可以称之为对象的原型,(隐士原型)


//原型有什么用?
//当我们从一个对象中获取一个属性时,他会触发 [[get]] 操作
// 1. 在当前对象中去查找对象中的属性,如果找到就直接使用
//2. 如果么有找到就去它的原型
obj.__proto__.age = 12

console.log(obj.age)