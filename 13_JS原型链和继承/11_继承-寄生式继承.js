let p = {
    running:function() {
        console.log("running");
    }
}

function createStudent(name) {
    let stu = Object.create(p)
    stu.name = name
    stu.studying = function(){
        console.log("isstudying")
    }
    return stu
}
let stuObj = createStudent("thunder")
console.log(stuObj.__proto__);