var randum = require('./index');

test('random int', () => {
  var success = true;

  randum.int('foo', 5, 10);
  for (var i = 0; i < 1000; i++) {
    var j = randum.get('foo');
    if (isNaN(j) || j < 5 || j > 10) {
      success = false;
      break;
    }
  }

  expect(success).toBe(true);
});

test('random float', () => {
  var success = true;
  randum.float('foo', 5.5, 6, 2);
  for (var i = 0; i < 1000; i++) {
    var j = randum.get('foo');
    if (isNaN(j) || j < 5.5 || j > 6) {
      success = false;
      break;
    }
  }

  expect(success).toBe(true);
});

test('random array item', () => {
  var success = true;
  var array = ['b','a','r'];
  randum.array('foo', array);
  for (var i = 0; i < 1000; i++) {
    var j = randum.get('foo');
    if (array.indexOf(j) === -1) {
      success = false;
      break;
    }
  }

  expect(success).toBe(true);
});

test('random int failures', () => {
  var success;

  success = true;
  try { randum.int(7); success = false; }
  catch (err) {}
  expect(success).toBe(true);

  success = true;
  try { randum.int('foo'); success = false; }
  catch (err) {}
  expect(success).toBe(true);

  success = true;
  try { randum.int('foo', 8, 5); success = false; }
  catch (err) {}
  expect(success).toBe(true);

  success = true;
  try { randum.int('foo', 'x', 'y'); success = false; }
  catch (err) {}
  expect(success).toBe(true);
});

test('random float failures', () => {
  var success;

  success = true;
  try { randum.float(7); success = false; }
  catch (err) {}
  expect(success).toBe(true);

  success = true;
  try { randum.float('foo'); success = false; }
  catch (err) {}
  expect(success).toBe(true);

  success = true;
  try { randum.float('foo', 8, 5); success = false; }
  catch (err) {}
  expect(success).toBe(true);

  success = true;
  try { randum.float('foo', 'x', 'y'); success = false; }
  catch (err) {}
  expect(success).toBe(true);
});

test('random array item failures', () => {
  var success;

  success = true;
  try { randum.array(7); success = false; }
  catch (err) {}
  expect(success).toBe(true);

  success = true;
  try { randum.array([]); success = false; }
  catch (err) {}
  expect(success).toBe(true);
});
