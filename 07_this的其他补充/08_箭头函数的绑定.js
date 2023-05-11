var name = 'global';

var foo = () => {
  console.log(this);
};
foo(); //window
var obj = {
  foo: foo,
};
obj.foo(); //window
foo.call('abc'); //window

//2.应用场景

var obj = {
  data: [],
  getDagta: function () {
    setTimeout(() => {
      var result = [1, 2, 3, 4, 5];
      this.data = result;
    }, 2000);
  },
};
obj.getDagta();
