
const s1 = Symbol("s1")
const s2 = Symbol('s2')
let obj = {
    name:"thunderChen",
    friend:{
        name:"thunderChen",
    },
    foo() {
        console.log("我是朋友是你吗?");
    },
    [s1]:"abc",
    s2:s2
}

const info = JSON.parse(JSON.stringify(obj))
console.log(info === obj);
obj.friend.name = "itc"
console.log(info);