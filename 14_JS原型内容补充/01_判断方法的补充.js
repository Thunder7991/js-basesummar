let obj = {
  name: 'thunder',
  age: 18,
};

let info = Object.create(obj, {
  address: {
    value: '北京',
    enumerable: true,
  },
  name: {
    value: 13,
    enumerable: true,
  },
});

console.log(info);

console.log(info.__proto__);
console.log(info.name);
//hasOwnPrototype 对象自身的属性
console.log(22,info.hasOwnProperty('address'));

//in 操作符 :不管在当前点对象还是原型中都是true

console.log("address" in info);

//for in

for (const key in info) {
    console.log(key);
}
// address
// name
// age