export function debounce(fn, delay, immediate = false,cb) {
  let timer = null;
  let isInvoke = false;
  const _debounce = function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    if (!isInvoke && immediate === true) {
     let result =  fn.apply(this, args);
  
      isInvoke = true;
    } else {
      setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
  _debounce.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      isInvoke = false;
    }
  };

  return _debounce;
}
