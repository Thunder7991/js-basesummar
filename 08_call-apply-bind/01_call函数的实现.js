//给所的函数填一个tccall的方法
Function.prototype.tccall = function (thisArg, ...args) {
    //执行调用的那个函数(foo)
    //1.获取需要被执行的函数
    var fn = this
    //1.1处理边界(传递的参数为非对象)

    thisArg = thisArg !== null && thisArg !== undefined? Object(thisArg):window
    //2.调用需要被执行的函数
    thisArg.fn = fn
    var result =  thisArg.fn(...args)
    delete thisArg.fn
    //3-返回结果
    return result

};

function foo(...args) {
  console.log('foo函数被执行',this,args);
}

//系统的call方法
foo.call()

//自定义tccall方法
foo.tccall({name:'tc'});
// foo.tccall(123)
// foo.tccall('123')
// foo.tccall(null)
// foo.tccall(undefined)

// foo.tccall('123','1','2','3')




