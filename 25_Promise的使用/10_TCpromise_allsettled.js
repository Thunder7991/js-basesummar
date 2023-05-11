//状态变量
const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';

function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (error) {
    reject(error);
  }
}

class TCPromise {
  constructor(executor) {
    console.log(executor);
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
          //防止初始化时resolve 和 reject 同时调用
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

    try {
      // 执行函数
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onfullfilled, onrejected) {
    const defineOnRejected = (err) => {
      throw err;
    };
    onrejected = onrejected || defineOnRejected;

    const defalutOnFulfilled = (value) => {
      return value;
    };
    onfullfilled = onfullfilled || defalutOnFulfilled;
    //链式调用
    return new TCPromise((resolve, reject) => {
      //如果在then函数调用的时候，状态已经确定下来，
      if (this.status === PROMISE_STATUS_FULFILLED && onfullfilled) {
        execFunctionWithCatchError(onfullfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
        execFunctionWithCatchError(onrejected, this.reason, resolve, reject);
      }
      //将成功回调和失败回调放入到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onfullfilled) {
          this.onfullfilledFns.push(() => {
            execFunctionWithCatchError(
              onfullfilled,
              this.value,
              resolve,
              reject,
            );
          });
        }

        if (onrejected) {
          this.onrejectedFns.push(() => {
            execFunctionWithCatchError(
              onrejected,
              this.reason,
              resolve,
              reject,
            );
          });
        }
      }
    });
  }
  catch(onrejected) {
    return this.then(undefined, onrejected);
  }
  finally(onfinally) {
    this.then(
      () => {
        onfinally();
      },
      () => {
        onfinally();
      },
    );
  }

  static resolve(value) {
    return new TCPromise((resolve) => resolve(value));
  }
  static reject(reason) {
    return new TCPromise((resovle, reject) => reject(reason));
  }
  static all(promises) {
    return new TCPromise((resolve, reject) => {
      const values = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res);
            if (values.length === promises.length) {
              resolve(values);
            }
          },
          (err) => {
            reject(err);
          },
        );
      });
    });
  }

  static allSettled(promises) {
  return  new TCPromise((resolve) => {
      const results = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            results.push({ status: PROMISE_STATUS_FULFILLED, value: res });
            if (results.length === promises.length) {
              resolve(results);
            }
          },
          (err) => {
            results.push({ status: PROMISE_STATUS_REJECTED, value: err });

            if (results.length === promises.length) {
              resovle(results);
            }
          },
        );
      });
    });
  }
}

let p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
});

let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2222);
  }, 2000);
});

let p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3333);
  }, 3000);
});

TCPromise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
