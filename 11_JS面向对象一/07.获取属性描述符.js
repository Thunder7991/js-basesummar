let obj = {
    _age :18,
};
Object.defineProperties(obj, {
  name: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'thunder',
  },
  age: {
    configurable: true, //同顶部
    enumerable: true,
    get: function () {
      return this._age;
    },
    set: function (value) {
      this._age = value;
    },
  },
});

//获取某一个特定属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
//所有属性的描述符
console.log(Object.getOwnPropertyDescriptors(obj))