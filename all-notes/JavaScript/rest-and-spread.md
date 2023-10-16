# JavaScript Rest and Spread

## Rest
- want func to take unkown amout of params
- example: func that checks to see if some number in a list is = to a given number, could write this using array
```
function hasNumber(test, numbers) {
  return numbers.some((i) => i === test);
}

const a = [1, 2, 3];
hasNumber(2, a);
// RETURNS: true
```
- sometimes no array so you make one on the fly
```
function hasTwo(a, b, c) {
  return hasNumber(2, [a, b, c]);
}
```
- JS provideds `rest` syntax to make this easier
    - it like param that has the "rest" of the params
- to turn last param of any func into `rest` prefix with 3 periods
    - then you can call with any num params and they auto combine into an array
```
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
- you can only make the last param a `rest` param
- technically `rest` lets JS provide variadic funcs

## Spread
- opposite of rest
- takes iterable obj and expands into fun param
```
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```