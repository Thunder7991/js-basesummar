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
      }, delay);
    }
  };
  return _debounce;
}

// function  debounce(fn,delay,immediate = false) {
//     let timer = null
//     let isImmediate = false
//     const _debounce = function (...args) {
//       if (timer) {
//         clearTimeout(timer)
//       }
//       if (immediate && !isImmediate) {
//         fn.apply(this,args)
//         isImmediate = true
//       }else {
//         timer = setTimeout(() => {
//           fn.apply(this,args)
//           isImmediate = false
//         })
//       }
//     }
//     return _debounce
// }

