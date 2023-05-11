function foo(el) {
    console.log(el,this.id);
}

var obj = {
    id: 'obj',
};
//必须添加分号
[1,2,3].forEach(foo,obj);

//
var nums = [1,2,3]
nums.forEach(foo,obj);