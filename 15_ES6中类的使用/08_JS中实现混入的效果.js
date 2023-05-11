class Person {}

class Runner {
    running() {}
}

function mixinRunner(basecalss) {
 class NewClass extends basecalss {
    running() {
        console.log("running ~");
    }
 }
 return NewClass
}

function mixinEater(baseClass) {
    return class extends baseClass {
        eating() {
            console.log("eating");
    }
}
}
class Student extends Person {

}

let NewStudent =mixinEater(mixinRunner(Student)) 

let ns = new NewStudent()
ns.running()
ns.eating()