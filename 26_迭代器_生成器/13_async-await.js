function requestData(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params);
    }, 2000);
  });
}

async function getData() {
  const res1 = await requestData('thudner');
  const res2 = await requestData(res1 + 'bbbb');
  const res3 = await requestData(res2 + 'cccc');
  const res4 = await requestData(res3 + 'dddd');
  console.log(16, res4);
}

getData();


async function foo() {
        // return 10
}
foo().then(res => {
    console.log(res);
})
