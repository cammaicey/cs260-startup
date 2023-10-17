# JavaScript Destructuring
- don't confuse with deCONstructing
- process of pulling individual items out of an existing one, or removing structure
- can do with arrays or objects
- helpful when you only care about few items in og structure
- example
```
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
- even though it looks like you are constructing an array, you are just specifying you want to deconstruct out the array
- can also combine items from og obj using rest
```
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```
- works similar for objs, except arrays, assignment associated val was assumed by po in the two arrays
- when destructuring objs explicitly specify the properties you want to pull from the source obj
```
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```
- can map names to new variables
```
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```
- default vals may be provided for missing ones
```
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```
- all above created new const vars, can also reassign vars
```
let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1
```