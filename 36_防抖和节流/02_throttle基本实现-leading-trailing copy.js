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
    if (!leading && !lastTime) {
      lastTime = nowTime;
    }

    //使用当前时间和之前的时间间隔以及上一次开始的时间,计算出还剩多长时间需要去触发函数
    //第一次触发
    const remainTime = interval - (nowTime - lastTime);
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
  return _throttle;
}
