# dd-try-catch
Simple Try Catch with only one return

### Installation
```shell
$ npm install dd-try-catch
```

### Use
```javascript
// CommonJS
const tryCatch = require('dd-try-catch');

// ES6
import tryCatch from 'dd-try-catch';
```

```javascript
const [error, result] = tryCatch(<Function>, <AnyData>);
```

```javascript
const { parse } = JSON;
const [error, result] = tryCatch(parse, '{"test": "ok"}');

// or

const fn = (data) => JSON.parse(data);
const [error, result] = tryCatch(fn, '{"test": "ok"}');

// or

const fn = () => JSON.parse('{"test": "ok"}');
const [error, result] = tryCatch(fn);

// or

const data = '{"test": "ok"}';
const fn = () => JSON.parse(data);
const [error, result] = tryCatch(fn);

// Console on return

if (error) console.log(error.message);
console.log(result); // {"test": "ok"}

```


