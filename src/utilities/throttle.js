export const throttle = (fn, timeInMilliseconds = 300) => {
  let startTime;

  return (...args) => {
    if (!startTime) {
      fn(...args);
      startTime = new Date();
      return;
    }

    const timeDiff = new Date().valueOf() - startTime.valueOf();
    if (timeDiff > timeInMilliseconds) {
      fn(...args);
      startTime = new Date();
    }
  };
};
