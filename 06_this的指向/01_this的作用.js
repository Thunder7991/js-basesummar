var obj = {
    name:'tc',
    eating:function(){
        console.log(this);
        console.log(this.name);
    },
    running:function(){
        console.log(this.name);
    },
    studying:function(){
        console.log(this.name);
    }

}

obj.eating()

