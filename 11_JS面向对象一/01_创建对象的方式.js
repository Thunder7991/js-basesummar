//创建一个对象, 对于人进行描述

//创建方式一: 通过new Object()创建

let obj1 = new Object();
obj1.name = 'ThunderChen';
obj1.age = 18;
obj1.run = function () {};
//创建方式2: 对象字面量
let obj2 = {
  //对象字面量
  name: 'ThunderChen',
  status() {
    console.log(this.name + "正在骑行回家！")
  }
};
obj2.status()


