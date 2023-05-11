//1.setTimeout
setTimeout(function () {
  console.log(this); //window
}, 2000);


function tcSetTimeout(fn,duration) {
    
}

var names = [1,2,3,4,5,6]
names.forEach(function (item,index) {
    console.log(item,this);
},'12313')