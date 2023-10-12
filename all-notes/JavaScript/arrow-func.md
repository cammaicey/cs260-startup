# JavaScript Arrow Function
- funcs first order objects in JS, can be delcared anywhere and passed as parameters
- make code more compact `arrow` syntax made
    - replaces need for `function` keyword with `=>`placed after parameter declaration
- func arrow syntax, no parameters, always returns 3
```
() => 3;
```
- two invocations of sort are equivalent
```
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```
- important semantic differences with `arrow`
    - includes restrictions that arrow functions cannot be used for constructors or iterator generators

## Return Values
- special rule for `return` keyword
- it is optional if no curly braces are provided and contains a single expression
    - result of expression is auto returned
- otherwise if curly braces it is like a normal func
```
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```

## The Pointer
- inherit the `this` pointer from scope where it is created
    - this makes a `closure`: allows a function to continue referencing its creation scope, even after it has passed out of that scope
- makeClosure returns an anonymous function using the arrow syntax
    - a parameter is overridden
    - new b variable is created
    - both a and b are referenced in the arrow function
        - Because of that reference, they are both part of the closure for the returned function
```
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
```
- Next, we declare the variables a and b at the top level scope, and call makeClosure with a.
```
const a = 'a';
const b = 'b';

const closure = makeClosure(a);
```
- when we call closure function it will output the values contained in scope where it was created instead of the current values of the variables
```
console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
```
- Closures provide a valuable property
    - do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed

## Putting It All Together
- `debounce` function
    - only execute a specified function once within a given time window
- following code calls the browser's `window.addEventListener` function to add a callback function that is invoked whenever the user scrolls the browser's web page
    - 1st param wants to listen for `scroll` events
    - 2nd param function call for when `scroll` happens
        - this case calls `debounce`
    - debounce
        - 2 params, `time window` for executing the window func and `window func` to call within that limit
```
window.addEventListener(
  'scroll',
  debounce(500, () => {
    console.log('Executed an expensive calculation');
  })
);
```
- debounce implements execution of windowFunc within restricted time window by creating a closure that contains the current timeout and returning a function that will reset the timeout every time it is called
- returned function is what the scroll event will actually call when the user scrolls the page. However, instead of directly executing the windowFunc it sets a timer based on the value of windowMs. If the debounce function is called again before the window times out then it resets the timeout.
```
function debounce(windowMs, windowFunc) {
  let timeout;
  return function () {
    console.log('scroll event');
    clearTimeout(timeout);
    timeout = setTimeout(() => windowFunc(), windowMs);
  };
}
```