function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === 'object' || valueType === 'function');
}

function deepClone(OriginValue) {
  //判断传入的originValue是否是对象
  if (!isObject(OriginValue)) {
    return OriginValue;
  }
  const newObject = {};

  for (const key in OriginValue) {
    newObject[key] = deepClone(OriginValue[key]);
  }
  console.log(16,newObject);
  return newObject;
}

let obj = {
  name: 'itc',
  age: 18,
  friends: {
    name: 'CL',
  },
};
const newObj = deepClone(obj);
console.log(newObj === obj);
obj.friends.name = 'world';
console.log(newObj);
