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
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED;
        queueMicrotask(() => {
          this.value = value;
          this.onfullfilled(this.value);
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        queueMicrotask(() => {
          this.reason = reason;
          this.onrejected(this.reason);
        });
      }
    };
    // 执行函数
    executor(resolve, reject);
  }

  then(onfullfilled, onrejected) {
    this.onfullfilled = onfullfilled;
    this.onrejected = onrejected;
  }
}
//创建Private Promise
const promise = new TCPromise((resolve, reject) => {
  resolve(111);
  reject(222);
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  },
);
