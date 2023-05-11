Function.prototype.tcbind = function (bindthis, ...outArgs) {
  let fn = this;

  let innerBindThis =
    bindthis !== null && bindthis !== undefined ? bindthis : window;

  return function (...innerArgs) {
    innerBindThis.fn = fn;
    let newArr = outArgs.concat(innerArgs);
    let result = innerBindThis.fn(newArr);
    delete innerArgs.fn;
    return result;
  };
};

function foo(args) {
  console.log(this.name, ...args);
}
foo.tcbind({ name: 'thunder' }, 123)(123);
