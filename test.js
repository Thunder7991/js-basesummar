// function Person(name,age,friends){ 
//     (this.name = name), (this.friends = friends);
//   this.age = age;
//    } 
//    Person.prototype.addFunc = function() {
//     console.log(12323);
//    }
//    function Student(name, age, friends) { 
//     Person.call(this, name, age, friends); //借用构造函数
//     // 实例属性
//     this.sno = 111;
//    } 
//    let stu = new Student('thunder', 12, ['thunderchen']);
//    console.log(17,Object.getOwnPropertyDescriptors(stu));
//    console.log(18,stu.hasOwnProperty('name'));
//    console.log(stu.name); // "Nicholas"; 
//    console.log(stu.age); // 29
//    stu.addFunc()
//    instance.addFunc()




//    function superclass() {}
// superclass.prototype = {
//   // 在这里定义方法和属性
//   age:20
// };
// function subclass() {}
// subclass.prototype = Object.create(superclass.prototype, Object.getOwnPropertyDescriptors({
//   // 在这里定义方法和属性
//   age:18
// }));
// console.log(subclass.prototype);
// console.log(subclass.prototype.__proto__);



const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  console.log(me.__proto__);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
