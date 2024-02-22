export const debounce = (fn, timeInMilliseconds = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, timeInMilliseconds);
  };
};
