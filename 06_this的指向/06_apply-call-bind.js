function foo() {
    console.log(this);
}

// foo()

var obj = {
    name: 'tc',
}
foo.call(obj)
foo.apply(obj)
foo.apply(77777)

//call 和 apply的区别

function sum(num1,num2) {
    console.log(num1 + num2,this);
}

sum(20,30)
sum.call("call",20,30)
sum.apply("apply",[20,30])


//3. call 和apply 在执行函数时,是可以明确的绑定this的,这个绑定规则称之为显示绑定

