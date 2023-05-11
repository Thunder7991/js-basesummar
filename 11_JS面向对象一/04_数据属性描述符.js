//字面量形式定义对象:
//都为true

let obj = {
  name: 'thunder',
  age: 18,
};

Object.defineProperty(obj, 'address', {
  //很多配置
  value: '北京市', //默认值是undefined
  configurable: false, //不可配置, 不可以重新定义描述符 //默认值是false
  enumerable: false, //设置是否可以枚举的 //默认值是fasle
  writable: false, //该特性是属性是否可以赋值(写入) 默认值是false
});

delete obj.name;

console.log(obj.name);
delete obj.address; //不能删除
console.log(obj.address);

for (const item in obj) {
  if (Object.hasOwnProperty.call(obj, item)) {
    const element = obj[item];
    console.log(element);
  }
}

obj.address = '上海市';

console.log(obj.address); //北京市
