function debounce(fn, delay, immediate = false) {
  let timer = null;
  let isInvoke = false; //是否执行过
  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);

    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        isInvoke = false;
        timer = null;
      }, delay);
    }
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
