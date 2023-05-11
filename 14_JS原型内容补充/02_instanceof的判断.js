function inheritPrototype(SubType,SuperType) {
    SubType.prototype = Object.create(SuperType.prototype)
Object.defineProperty(SuperType.prototype,"constructor",{
    enumerable:false,
    configurable:true,
    writabel:true,
    value:SubType
})
}

function Person() {
    
}

function Student() {

}

inheritPrototype(Student,Person)

let stu = new Student()

console.log(stu instanceof Student); //true
console.log(stu instanceof Person); //true
console.log(stu instanceof Object); //true
