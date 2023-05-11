let obj = {
  name: 'thunder',
  age: 18,
};

Object.defineProperty(obj, 'height', {
  //很多的配置
  value: 1.88,
});

console.log(obj.height);
//属性描述符分类
//属性描述符的类型有两种
//数据属性描述
