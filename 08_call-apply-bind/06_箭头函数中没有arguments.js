//案例1

// var foo = () => {
//     console.log(arguments);
// }

// foo(1,2,3)


//案例2

function foo2() {
    var bar = () => {
        console.log(arguments); //{0:123}
    }
    return bar
}

var fn = foo2(123)
fn()

//案例3
var foo3 = (num1,num2,...args) => {
    console.log(args);
}

foo3(1,2,3,4,5)