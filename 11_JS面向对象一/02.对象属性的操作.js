let obj = {
  name: 'thunder',
  age: 18,
};
//获取属性
console.log(obj.name);
//给属性复制
obj.name = "kobe"
//删除属性
delete obj.name


//需求:对属性进行操作限制
//不允许某一个属性被复制/ 不允许 某些属性在遍历时遍历出来

//遍历属性
for (const item in obj) {
 console.log(item);
}

Object.defineProperty(obj,"age",{

})

