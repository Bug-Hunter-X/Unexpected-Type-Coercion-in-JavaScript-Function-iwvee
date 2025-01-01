function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // or throw an error
  }
  if (a === null || b === null) {
    return NaN; // or throw an error
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // NaN
console.log(foo(1, null)); // NaN
console.log(foo(null, null)); // NaN
console.log(foo('1', 2)); // NaN
console.log(foo(1, '2')); // NaN