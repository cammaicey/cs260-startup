# JavaScript Intro
- weakly typed language based upon concepts found in C, Java, and Scheme
- executed using an interpreter at runtime instead of compiling

## Javascript Versions
- considering the use of a JavaScript feature consult websites like MDN or CanIUse
| Year | Version | Features                                                                                                                  |
| ---- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1997 | ES1     | types, functions                                                                                                          |
| 1999 | ES3     | regex, exceptions, switch                                                                                                 |
| 2009 | ES5     | json, array iteration                                                                                                     |
| 2015 | ES6     | let/const, default params, classes, template literals, destructuring, generators, promises, modules, internationalization |
| 2016 | ES2016  | array.includes                                                                                                            |
| 2017 | ES2017  | async/await                                                                                                               |
| 2018 | ES2018  | rest/spread, promise.finally                                                                                              |
| 2019 | ES2019  | string.trim                                                                                                               |
| 2020 | ES2020  | ?? operator 

## Getting Started
- JavaScript runtime's built in function `console.log` to output the string to the debugger console
```
console.log('Hello' + ' ' + 'world');
// OUTPUT: Hello world
```
- with a function made 
```
function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
// OUTPUT: Hello world
```

## Comments
- line comment is `//`
- block comment is `/*` and closed with `*/`

## Code Delimiters
- technically not required but good to end statements with `;`
- code blocks defined with `{}`

## Playgrounds
- use codepen to practice writing javascript
- browser debugger
    - open chrome --> `F12` --> `Console`
        - interpreter where you can write and execute your code