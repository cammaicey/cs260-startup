# JavaScript Type and Construct

## Declaring Variables
- decalred with `let` and `const`
    - let allows you to change, const will cause an error

## Type
- primitive types
| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64 bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |
- JavaScript does not enforce the declaration of a variable before you use it, it is entirely possible for a variable to have the type of undefined
- object types
| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

## Common Operators
- supports standard mathematical operators
    - `+` addition
    - `-` subtraction
    - `*` multiplication
    - `/` division
    - `===` equality
- string variables, JavaScript support `+` and `===`

## Type Conversions
- weakly typed language
    - variable always has a type
    - can change type when it is assigned a new value
    - automatically converted based upon the context that they are used in
```
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
```
- unexpected results common with `==`
```
1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
```
- falsy and truthy
- remove this confusion, JavaScript introduced strict equality `===` and inequality `!==`
    - skip the type conversion when computing equality
```
1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
```

## Conditionals
- `if`, `else`, and `if else`
```
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```
- can also use the ternary operator
    - provides a compact if else
```
a === 1 ? console.log(1) : console.log('not 1');
```
- can use boolean operations
    - `&&` (and), `||` (or), and `!` (not).
```
if (true && (!false || true)) {
  //...
}
```

## Loops
- supports many common programming language looping constructs
    - for, for in, for of, while, do while, and switch
### For
```
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```
### Do While
```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```
### While
```
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```
### For In
- iterates over an object's property names
```
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```
- arrays the object's name is the array index
```
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```
### For Of
```
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```
### Beak and Continue
```
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1
```