function foo(num1,num2) {
    
    var  newArr = []
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i] + 10;
        newArr.push(element);
        
    }
    console.log(newArr);


    //

    var newArr2 = Array.prototype.slice.call(arguments,0);
    console.log(newArr2);


    var newArr3 = [].slice.call(arguments);

    //es6的方法
    var newArray4 = Array.from(arguments);

    var newArr5 = [...arguments];
}


foo(10,20,30,40,50);
