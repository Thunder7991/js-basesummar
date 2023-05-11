function throttle(fn, interval) {
  let lastTime = 0;
  const _throttle = function () {
    //获取当前时间
    const nowTime = new Date().getTime();

    //使用当前时间和之前的时间间隔以及上一次开始的时间,计算出还剩多长时间需要去触发函数
    //第一次触发
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      //真正触发函数
      fn();
      //保留上次触发的时间
      lastTime = nowTime;
    }
  };
  return _throttle;
}

function throttle(fn,interval) {
  let lastTime = 0
  const _throttle = function () {
    const nowTime= new Date().getTime()
    const remainTime = interval- (nowTime - lastTime)
    if (remainTime <= 0) {
      fn()
      lastTime = nowTime
    }
  }
  return _throttle
}