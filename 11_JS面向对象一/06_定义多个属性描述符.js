let obj = {
    _age :18,
    // set age(value) {
    //         this._age = value
    // },
    // get age() {
    //     return this._age
    // }
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

//开发中
