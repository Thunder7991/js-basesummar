//防抖
function debounce(fn, delay, immediate = false) {
  let timer = null;
  let isInvoke = false;
  const _debounce = function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate && !isInvoke) {
      fn.call(this, args);
      isInvoke = true;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        isInvoke = false;
        timer = null;
      }, delay);
    }
  };
  //添加取消功能
  _debounce.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      isInvoke = false;
      timer = null;
    }
  };

  return _debounce;
}

/**
 *
 * @param {*} fn 函数
 * @param {*} interval 间隔时间
 */
function throttle(
  fn,
  interval,
  options = {
    //头部执行，还是尾部执行
    leading: true, //头部
    trailing: false, //尾部
  },
) {
  const { leading, trailing } = options;
  //保留上次触发的时间
  let lastTime = 0;
  let timer = null;

  const _throttle = function (...args) {
    //获取当前时间
    let currentTime = new Date().getTime();
    if (!leading && !lastTime) {
      //默认的时间
      lastTime = currentTime;
    }
    //保留的时间
    //第一次为负数，肯定是立即执行的
    let remainTime = interval - (currentTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(this, args);
      lastTime = currentTime;
      return;
    }

    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null;
        lastTime = !leading ? 0 : new Date().getTime();
        fn();
      }, remainTime);
    }
  };

  return _throttle;
}
