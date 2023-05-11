function Student(name,age,sno) {
this.name = name
this.age = age 
this.sno = sno
}

Student.prototype.running = function (params) {
    console.log(this.name + "在跑步！");
}

Student.prototype.eating = function (params) {
    console.log(this.name + "在跑步！");
}

Student.prototype.studying = function (params) {
    console.log(this.name + "在跑步！");
}


function Teacher(name,age,title) {
    this.mame = name
    this.age = age
    this.title = title
}

Teacher.prototype.running = function (params) {
    console.log(this.name + "在跑步！");
}

Teacher.prototype.eating = function (params) {
    console.log(this.name + "在跑步！");
}

Teacher.prototype.teaching = function () {
    console.log(this.name + "在讲课！");
}