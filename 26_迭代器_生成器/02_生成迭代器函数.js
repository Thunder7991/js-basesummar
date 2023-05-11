const numbers = [1, 2, 3, 4, 56, 7];

const ages = [5, 5, 7, 4, 8, 5];

function createArrayIterator(arr) {
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        return { done: false, value: arr[index++] };
      } else {
        return { done: true, value: undefined };
      }
    },
  };
}
const numbersIterator = createArrayIterator(ages);
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

//创建一个无限的迭代器
function createNumberIterator() {
  let index = 0;
  return {
    next: function () {
      return { done: false, value: index++ };
    },
  };
}

const numbersInterator = createNumberIterator()
console.log(numbersInterator.next());
console.log(numbersInterator.next());
console.log(numbersInterator.next());
console.log(numbersInterator.next());
