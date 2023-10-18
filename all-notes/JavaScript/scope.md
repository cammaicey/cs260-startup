# Scope
- defiend as variables that are visible in curr context of execution
- four scopes
    - **Global**: visible to all code
    - **Module**: visible to all code running in a module
    - **Function**: visible within a function
    - **Block**: visible within a block of code delimited by curly braces

## Var
- used to use `var` to declare variable
    - problem it ignores block scope unlike `const` or `let`
    - logically hoisted to the top
```
var x = 10;
console.log('start', x);

for (var x = 0; x < 1; x++) {
  console.log('middle', x);
}

console.log('end', x);

// OUTPUT: start 10
//         middle 0
//         end 1
```
- strongly suggested to only use `const` and `let`

## This
- `this` points to an object that contains context within the scope of curr exectuing code
- auto declared and can ref anywhere in JS program
- three different contexts that it can refer to
    - **Global**: reffed outside func or obj it refers to `globalThis`, represents context for runtime environment for example, when running in a browser, `globalThis` refers to the browser's window object
    - **Function**: reffed in a func it refers to obj that owns func, either obj you define or globalThis if the function is defined outside of an obj, note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis
    - **Object**: reffed in obj it refers to obj
```
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
```
The Output
```
global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest
```
- if we were not using JavaScript strict mode then globalFunctionThis would refer to Window

## Closure
- defined as func and the surrounding state
- whatever vars are accessible when func is created are available inside of that func
- holds true even if pass the funct outside of its og scope
- example of a func that is created as part of obj
    - means that function has access to the obj's this pointer
```
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
```
- arrow funcs bit diff, they inherit `this` pointer of their creation context
- change prev example to return arrow func, this pointer at the time of creation will be globalThis
```
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
```
- make function in our object that returns an arrow function, pointer will be the object's this pointer since that was the active context at the time the arrow function was created
```
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
```