var name= "window"

var person = {
    name: "person",
    sayName: function () {
        console.log(this.name);
    }
}

function sayName() {
    var sss = person.sayName
    sss(); //独立函数调用 window
    person.sayName() // 隐士调用 person
    (person.sayName)(); //隐士调用 person
    (b = person.sayName)(); // window  赋值表达式(独立函数调用)
}

sayName()