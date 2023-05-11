let obj = {
  name: 'thudner',
  age: 18,
};
//触发[[get]]操作
//1. 在当前对象中查找属性
//2. 如果没有找到， 这个时候回去原型（__proto__）对象上查找
console.log(obj.address);

obj.__proto__ = {};

obj.__proto__.__proto__ = {};

obj.__proto__.__proto__.__proto__ = {
  address: '北京市',
};
