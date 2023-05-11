//第三种方案 Promise + generator 实现

function requestData(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params);
    }, 2000);
  });
}

function* getData() {
  const res1 = yield requestData('thudner');
  const res2 = yield requestData(res1 + 'bbbb');
  const res3 = yield requestData(res2 + 'cccc');
  const res4 = yield requestData(res3 + 'dddd');
  console.log(16, res4);
}

const generator = getData();

//手动执行生成器函数

// generator.next().value.then((res) => {
//   generator.next(res).value.then((res) => {
//     generator.next(res).value.then((res) => {
//       console.log(res);
//     });
//   });
// });

function execGenerator(generatorFn) {
  const generator = generatorFn();
  function exec(res) {
    const result = generator.next(res);
    if (result.done) {
      return result.value;
    }
    result.value.then((res) => {
      exec(res);
    });
  }
  exec();
}
execGenerator(getData);
