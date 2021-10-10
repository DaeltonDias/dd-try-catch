const tryCatchAsync = async (fn, ...args) => {
  try {
    return [null, await fn(...args)];
  } catch(e) {
    return [e];
  }
};

const tryCatch = (fn, ...args) => {
  try {
    return [null, fn(...args)];
  } catch(e) {
    return [e];
  }
};

module.exports = {
  tryCatchAsync,
  tryCatch,
};