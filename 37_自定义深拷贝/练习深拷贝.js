function isObject(objtype) {
  let obj = typeof objtype;
  return obj !== null && obj === 'object';
}

function deepClone(val, map = new WeakMap()) {
  //对特殊类型进行判断
  //map  set
  if (val instanceof Map) {
    return new Map([...val]);
  }

  if (val instanceof Set) {
    return new Set([...val]);
  }
  //判断是否是symbol
  if (typeof val === 'symobl') {
    return Symbol(val.description);
  }
  //判断是否是函数
  if (typeof val === 'function') {
    return val;
  }

  //判断val 是否是对象 , 如果是基本类型，除了symbol外，会直接作为值进行返回。
  if (!isObject(val)) {
    console.log(val);
    return val;
  }
  //判断是否重复
  if (map.has(val)) {
    return map.get(val);
  }

  //判断传入的对象是否是数组还是对象
  let newObj = Array.isArray(val) ? [] : {};
  // 保留deep
  map.set(val, newObj);
  //深拷贝
  for (const key in val) {
    if (Object.hasOwnProperty.call(val, key)) {
      const el = val[key];
      newObj[key] = deepClone(el, map);
    }
  }

  //因为symbol 遍历不会出现在for...in、for...of循环中
  let symbolKeys = Object.getOwnPropertySymbols(val);
  for (const key of symbolKeys) {
    newObj[key] = deepClone(val[key], map);
  }

  return newObj;
}

let testObj = {
  a: 10,
  b: 'str',
  c: { test: 2 },
  [Symbol(1)]: 10,
};
let b = deepClone(testObj);
console.log(testObj);
console.log(testObj === b);
console.log(testObj[Symbol(1)] === b[Symbol(1)]);
