function foo() {
    var a = b = 10
    //等价于
    // var a = 10
    //     b = 10
}

foo()

// console.log(a);
console.log(b);