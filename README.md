# randum

Stores parameters used to randomly generate items.

## Installation

```javascript
npm install randum
```

## Usage

### Random Integers

Storing parameters and generating a random item.

```javascript
var randum = require('randum');

// print a random int from 1 to 10
randum.int('foo', 1, 10);
console.log(randum.get('foo'));
```

### Random Floats

The final parameter in `float` is precision, the value passed to `toFixed` before output is passed to `parseFloat`.

```javascript
// print a randum float from 5.5 to 10
randum.float('foo', 5.5, 10, 2);
console.log(randum.get('foo'));
```

### Random Array Item

```javascript
// prints a, b, or c
randum.array('foo', ['a', 'b', 'c']);
console.log(randum.get('foo'));
```

## Test

**randum** uses the Jest testing framework. Run `npm test` to execute all tests.

