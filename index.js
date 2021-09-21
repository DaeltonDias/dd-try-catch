const tryCatch = (fn, ...args) => {
  try {
    return [null, fn(...args)];
  } catch(e) {
    return [e];
  }
};

module.exports = tryCatch;