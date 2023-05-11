function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === 'object' || valueType === 'function');
}

function deepClone(OriginValue) {
  //判断是否是set类型
  if (OriginValue instanceof Set) {
    return new Set([...OriginValue]);
  }
  //判断是否是map类型
  if (OriginValue instanceof Map) {
        return new Map([...OriginValue]);
  }
  //判断如果是Symbol 类型, 那么创建一个新的Symbol
  if (typeof OriginValue === 'symbol') {
    return Symbol(OriginValue.description);
  }
  if (typeof OriginValue === 'function') {
    return OriginValue;
  }
  //判断传入的OriginValue是否是对象
  if (!isObject(OriginValue)) {
    return OriginValue;
  }
  //判断传入的对象是数组,还是对象
  const newObject = Array.isArray(OriginValue) ? [] : {};

  for (const key in OriginValue) {
    newObject[key] = deepClone(OriginValue[key]);
  }

  //对Symbol 的key进行特殊的处理
  const symbolKyes = Object.getOwnPropertySymbols(OriginValue);
  for (const sKey of symbolKyes) {
    newObject[sKey] = deepClone(OriginValue[sKey]);
  }
  return newObject;
}
const s1 = Symbol('s1');
const s2 = Symbol('s2');
let obj = {
  name: 'itc',
  age: 18,
  friends: {
    name: 'CL',
  },

  [s1]: 'abc',
  s2: s2,
  Set: new Set([1, 2, 3]),
  Map:new Map([['a',1],['b',2]]),
  foo() {
    console.log('hello');
  },
};
const newObj = deepClone(obj);
console.log(newObj === obj);
obj.friends.name = 'world';
console.log(newObj);
