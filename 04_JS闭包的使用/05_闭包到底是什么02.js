function foo() {
    function bar() {
        console.log('ba');
    }
    return bar
}

var fn =  foo()
fn()


// 该看: 01:33:10