var obj = {
  name: 'thunder',
  age: 18,
};

obj.height = 1.88;

obj.address = '北京市';

//.禁止对象添加新的属性
// Object.preventExtensions(obj);
obj.hobby = '打游戏';
console.log(obj);

//禁止对象配置/ 删除里面的属性

// for (const key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key],
//   });
// }

// Object.seal(obj);
// delete obj.name;
// console.log(obj);

//让对象不可以修改(writeableL:false)
Object.freeze(obj);
obj.name = 'kobe';
console.log(obj);
