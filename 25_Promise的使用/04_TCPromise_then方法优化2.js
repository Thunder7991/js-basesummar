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
    // //如果在then函数调用的时候，状态已经确定下来，
    // if (this.status === PROMISE_STATUS_FULFILLED && onfullfilled) {
    //   onfullfilled(this.value);
    // }
    // if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
    //   onrejected(this.reason);
    // }
    // //将成功回调和失败回调放入到数组中
    // if (this.status === PROMISE_STATUS_PENDING) {
    //   this.onfullfilledFns.push(onfullfilled);
    //   this.onrejectedFns.push(onrejected);
    // }
    //链式调用
    return new TCPromise((resolve, reject) => {
      //如果在then函数调用的时候，状态已经确定下来，
      if (this.status === PROMISE_STATUS_FULFILLED && onfullfilled) {
        try {
          let value = onfullfilled(this.value);
          resolve(value);
        } catch (error) {
          console.log(error);
          reject(error);
        }
      }
      if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
        try {
          let reason = onrejected(this.reason);
          resolve(reason);
        } catch (error) {
          reject(error);
        }
      }
      //将成功回调和失败回调放入到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
     if(onfullfilled) this.onfullfilledFns.push(() => {
          try {
            let value = onfullfilled(this.value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
     if(onrejected) this.onrejectedFns.push(() => {
          try {
            let reason = onrejected(this.reason);
            resolve(reason);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }
  
}
//创建Private Promise
const promise = new TCPromise((resolve, reject) => {
  // resolve(111);
  // reject(222);
  //直接抛出异常
  throw new Error('executor error message');
});
//调用多次，执行多次
promise
  .then(
    (res) => {
      console.log('res1', res);
      throw new Error('res1 error');
    },
    (err) => {
      console.log(err);
    },
  )
  .then(
    (res) => {
      console.log(115, res);
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
