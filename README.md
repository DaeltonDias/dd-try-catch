# dd-try-catch
Simple Try Catch with only one return

### Installation
```shell
$ npm install dd-try-catch
```

### Use
```javascript
// CommonJS
const { tryCatch, tryCatchAsync } = require('dd-try-catch');
```
```javascript
// ES6
import { tryCatch, tryCatchAsync } from 'dd-try-catch';
```

```javascript
// Synchronous
const [error, result] = tryCatch(<Function>, <Param>);
```

```javascript
// Asynchronous examples (Async / Await)
const [error, result] = await tryCatchAsync(<Function>, <Param>);
```

### Synchronous examples
```javascript
const { parse } = JSON;
const [error, result] = tryCatch(parse, '{"test": "ok"}');

// or

const fn = (param) => JSON.parse(param);
const [error, result] = tryCatch(fn, '{"test": "ok"}');

// or

const fn = () => JSON.parse('{"test": "ok"}');
const [error, result] = tryCatch(fn);

// or

const param = '{"test": "ok"}';
const fn = () => JSON.parse(param);
const [error, result] = tryCatch(fn);

// Console on return

if (error)  console.log(error.message);
if (!error) console.log(result.test);

// error  = null or {"message": "Error message"}
// result = null or {"test": "ok"}

```

### Asynchronous examples (Async / Await)
```javascript
(async () => {
  
  const axios = require('axios');
  
  const fn = async () => await axios.get('https://myapi.com/posts'); // Returns a promise
  const [error, result] = await tryCatchAsync(fn); // Execute and resolve a promise

  // or

  const fn = () => axios.get('https://myapi.com/users'); // Returns a promise
  const [error, result] = await tryCatchAsync(fn); // Execute and resolve a promise

  console.log(result.data);
  
})();
```

