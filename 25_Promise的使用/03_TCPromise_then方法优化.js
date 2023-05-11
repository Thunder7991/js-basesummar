//状态变量
const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';

class TCPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    //保存回调值
    this.value = undefined;
    this.reason = undefined;
    //调用的所有回调
    this.onfullfilledFns = [];
    this.onrejectedFns = [];
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onfullfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        //添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onrejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };
    // 执行函数
    executor(resolve, reject);
  }

  then(onfullfilled, onrejected) {
    //如果在then函数调用的时候，状态已经确定下来，
    if (this.status === PROMISE_STATUS_FULFILLED && onfullfilled) {
      onfullfilled(this.value);
    }
    if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
      onrejected(this.reason);
    }
    //将成功回调和失败回调放入到数组中
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onfullfilledFns.push(onfullfilled);
      this.onrejectedFns.push(onrejected);
    }
  }
}
//创建Private Promise
const promise = new TCPromise((resolve, reject) => {
  resolve(111);
  reject(222);
});
//调用多次，执行多次
promise.then(
  (res) => {
    console.log('res1', res);
  },
  (err) => {
    console.log(err);
  },
);

promise.then(
  (res) => {
    console.log('res2', res);
  },
  (err) => {
    console.log(err);
  },
);

setTimeout(() => {
  promise.then(
    (res) => {
      console.log('res3', res);
    },
    (err) => {
      console.log(err);
    },
  );
}, 3000);
