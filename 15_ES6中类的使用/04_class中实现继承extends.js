class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  running() {
    console.log(this.name + 'running!');
  }

  eating() {
    console.log(this.name + 'eating');
  }
  personMethod() {
    console.log("相关逻辑");
  }
  static PersonStaticMethod() {

  }
}

//Student被称之为子类（派生类）
class Student extends Person {
  //JS引擎在解析子类的时候要求我们有实现继承那么子类的构造方法中，在使用this之前
  //或者constructor在返return his之前调，必须调用 super方法
  //将name 和age传递过去，交给父类处理，赋值给父类（this）的对象里面，我们打印
  //Stu 发现可以显示name age属性，因此创建的属性还是方法哦student里面的
  constructor(name, age, sno) {
    super(name, age);
    this.sno = sno;
  }
  studying() {
    console.log(this.name + 'studying');
  }
  //重写父类的方法
  running() {
    console.log("student",this.name+"eating")
  }
  //
  personMethod() {
    super.personMethod()

  //  

  }
  //重写静态方法
 static PersonStaticMethod() {
  super.PersonStaticMethod()
  }
}

let stu = new Student('thudner', 18, 222);
console.log(stu);

stu.eating();
stu.running();
