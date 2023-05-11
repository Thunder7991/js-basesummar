function foo() {
    function bar() {
        console.log('ba');
    }
    return bar
}

var fn =  foo()
fn()