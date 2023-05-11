let obj = {
  name: 'thudner',
  age: 18,
  friends:[]
};
//方法1
function createObject(o) {
  let newObj = {};
  Object.setPrototypeOf(newObj, o);
  return newObj;
}
//方法2
function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  let newObj = new Fn();
  return newObj;
}

// var info = createObject(obj);


let info = Object.create(obj)
info.age = 30
info.friends.push("clearlove")
console.log(info);
console.log(info.__proto__);
let info2 = Object.create(obj)
console.log(info2);
console.log(info2.__proto__);




