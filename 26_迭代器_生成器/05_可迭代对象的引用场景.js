
const iterableObj = {
    names: [1, 2, 3],
    [Symbol.iterator]: function () {
      let index = 0;
      return {
        next:  ()=> {
          if (index < this.names.length) {
            return { done: false, value: this.names[index++] };
          } else {
            return { done: true, value: undefined };
          }
        },
      };
    },
  };

  let names = ["abc","qwe","iop"]
  const newNames = [...names,...iterableObj]
for (const item of newNames) {
    console.log(item);
}
let obj = {name:"thudner",age:18}

const newObj = {...obj}
console.log(newObj);

// 

// let set1 = new Set({a:10})