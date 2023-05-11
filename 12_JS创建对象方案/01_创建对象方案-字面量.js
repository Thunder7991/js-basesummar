let p1 = {
    name:"张三",
    age:18,
    height:20,
    address:"北京",
    running:function() {
        console.log(this.name + "在跑步~")
    },
    eatting:function() {
        console.log(this.name + "在吃饭!");
    }
}
