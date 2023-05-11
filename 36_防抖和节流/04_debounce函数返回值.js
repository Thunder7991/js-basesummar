function debounce(fn, delay, immediate = false, cb) {
  let timer = null;
  let isInvoke = false; //是否执行过
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer);
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args);
        if (cb && typeof cb === 'function') {
          cb(result);
        } else if(cb !== undefined) {
          isInvoke = false;
          timer = null;
          throw new Error('cb must be a function');
        }
        resolve(result);
        isInvoke = true;
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(this, args);
          if (cb && typeof cb === 'function') {
            cb(result);
          } else if(cb !== undefined) {
            isInvoke = false;
            timer = null;
            throw new Error('cb must be a function');
          }
          resolve(result);
          isInvoke = false;
          timer = null;
        }, delay);
      }
    });
  };

  //取消请求
  _debounce.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      isInvoke = false;
    }
  };
  return _debounce;
}
