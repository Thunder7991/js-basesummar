function createPerson(name, age, height, address) {
  let p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  p.address = address;
  p.run = function() {
    console.log(this.name + "正在跑步");
  }

  return p;
}

let p1 = createPerson('张三', 18, 1.88, '广州市');

let p2 = createPerson("李四",18, 1.88, '广州市');

let p3 = createPerson("王五",18, 1.88, '广州市');

//缺点
//获取不到对象的最真是的类型
console.log(p1,p2,p3);