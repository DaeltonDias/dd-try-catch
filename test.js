const { tryCatch, tryCatchAsync } = require('./index');

const fnAsync = (param) => new Promise((resolve, reject) => {
  const data = JSON.parse(param);
  setTimeout(() => {
    resolve(data);
  }, 4000);
});

const param = '{"message": "ok"}';

(async () => {
  const fn = () => fnAsync(param); // Return a promisse
  const [ error, result ] = await tryCatchAsync(fn);
  const type = 'Asynchronous function';
  console.log({ error, result, type });
})();

(() => {
  const fn = () => JSON.parse(param);
  const [ error, result ] = tryCatch(fn);
  const type = 'Synchronous function';
  console.log({ error, result, type });
})();

