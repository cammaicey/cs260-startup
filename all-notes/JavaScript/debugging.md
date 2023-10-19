# Debugging JavaScript
- follow pattern of writing block code and then stepping through (debugging), gain confidence the code is actually working properly

## Console Debugging
- insert `console.log` is an easy way to debug code
- demostrate diff between `let` and `var` inserting `console.log` see what val of each index is
- the html
```
<body>
  <h1>Debugging</h1>
  <script src="index.js"></script>
</body>
```
- index.js
```
var varCount = 20;
let letCount = 20;

console.log('Initial - var: %d, let: %d', varCount, letCount);

for (var varCount = 1; varCount < 2; varCount++) {
  for (let letCount = 1; letCount < 2; letCount++) {
    console.log('Loop - var: %d, let: %d', varCount, letCount);
  }
}

const h1El = document.querySelector('h1');
h1El.textContent = `Result - var:${varCount}, let:${letCount}`;
console.log('Final - var: %d, let: %d', varCount, letCount);
```
- following steps to see the result of console debugging
    1. Create the above files in a test directory named testConsole
    2. Open the testConsole directory in VS Code
    3. Run index.html using the VS Code Live Server extension
    4. Open the Chrome browser debugger (press F12)
    5. Select the Console tab
    6. Refresh the browser
- this is ruselt
![result](https://github.com/webprogramming260/.github/raw/main/profile/javascript/debuggingJavascript/javascriptDebugConsole.jpg)
- debugger console window to inspect variables without using the console.log
- can also execute JavaScript directly in the console
- type `varCount = 50` and press `Enter`
![changing reuslt](https://github.com/webprogramming260/.github/raw/main/profile/javascript/debuggingJavascript/javascriptDebugConsoleVars.jpg)

## Browser Debugging
- using same steps for `console.log` debugging, except go to source tab
- displays source files for the currently rendered tab
![browser debugging](https://github.com/webprogramming260/.github/raw/main/profile/javascript/debuggingJavascript/javascriptDebugSource.jpg)
- either select `index.js` from the source view on the left, or press `CTRL-P` then select `index.js`
- set breakpoint on line 4
- refresh browser will cause index.js to reload and pause on breakpoint
![breakpoint](https://github.com/webprogramming260/.github/raw/main/profile/javascript/debuggingJavascript/javascriptDebugBreakpoint.jpg)
- browser paused can see variable val, vars in scope, set watches on vars, or use console to interact w/ code