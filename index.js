var store = {};

const types = {
  array: 0,
  float: 1,
  int: 2
}

/**
 * checks if key is valid
 * @param {string} key 
 * @return {boolean}
 */
function validKey(key) {
  return ! key || ! typeof key !== "string";
}

/**
 * returns a random array item
 * @param {number} array 
 * @return {mixed}
 */
function randomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * returns a random int between min and max
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * returns a random float between min and max
 * @param {number} min 
 * @param {number} max 
 * @param {number} precision 
 * @return {number}
 */
function randomFloat(min, max, precision) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}

/**
 * sets a random array type item
 * @param {string} key
 * @param {array} array
 * @return {null}
 */
function setArray(key, array) {
  if ( ! validKey(key))
    throw 'Invalid key.';

  if ( ! array || ! Array.isArray(array) || ! array.length)
    throw 'Invalid array.';

  store[key] = { type: types.array, array: array };
}

/**
 * sets a random int type item
 * @param {string} key
 * @param {number} min
 * @param {number} max
 * @return {null}
 */
function setInt(key, min, max) {
  if ( ! validKey(key))
    throw 'Invalid key.';

  if ( ! Number.isInteger(min))
    throw 'Invalid min value.';

  if ( ! Number.isInteger(max))
    throw 'Invalid max value.';

  if (min >= max)
    throw 'Invalid range.';

  store[key] = { type: types.int, min: min, max: max };
}

/**
 * sets a random float type item
 * @param {string} key
 * @param {number} min
 * @param {number} max
 * @param {number} precision
 * @return {null}
 */
function setFloat(key, min, max, precision) {
  if ( ! validKey(key))
    throw 'Invalid key.';

  if (isNaN(min))
    throw 'Invalid min value.';

  if (isNaN(max))
    throw 'Invalid max value.';

  if (min >= max)
    throw 'Invalid range.';

  store[key] = { type: types.float, min: min, max: max, precision: precision };
}

/**
 * gets a random item from configuration at key
 * @param {string} key 
 * @return {mixed}
 */
function get(key) {
  if ( ! store[key])
    return null;

  var item = store[key];

  switch (item.type) {
    case types.array:
      return randomArrayItem(item.array);
    case types.float:
      return randomFloat(item.min, item.max, item.precision);
    case types.int:
      return randomInt(item.min, item.max);
  }

  return null;
}

module.exports = {
  types: types,
  get: get,
  array: setArray,
  int: setInt,
  float: setFloat 
};
