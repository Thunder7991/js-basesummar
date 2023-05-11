function throttle(
  fn,
  interval,
  options = {
    leading: true, //头部
    trailing: false, //尾部
  },
) {
  const { leading, trailing } = options;
  let lastTime = 0;
  let timer = null;
  const _throttle = function () {
    //获取当前时间
    const nowTime = new Date().getTime();
    if (!leading && lastTime === 0) {
      lastTime = nowTime;
    }
    let remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      //真正触发函数
      fn();
      //保留上次触发的时间
      lastTime = nowTime;
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

  _throttle.cancel = function() {
        clearTimeout(timer)
        timer = null
        lastTime = 0
  }
  return _throttle;
}
