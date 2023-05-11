const names = [1,1,1,1]
console.log(names[Symbol.iterator]);
let iterator1 = names[Symbol.iterator]()
// console.log(iterator1.next());