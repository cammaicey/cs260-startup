# JavaScript Modules
- allow partitioning and sharing code
- got full module support with ES6
- Node.js modules are called CommonJS modules
- JavaScript modules are called ES modules
- only focusing on ES modules
- modules create a file based scope
- must explicitly `export` the objects from one file and then `import` them into another file
alert.js
```
export function alertDisplay(msg) {
  alert(msg);
}
```
- can import the module's exported function into another module using the `import`
main.js
```
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```

## ES Modules in the Browser
- ES modules in browser, via HTML script refs, things get a little complicated
- **key thing to understand**: modules can only be called from other modules
- cannot access JS contained in module from global scope that your non-module JavaScript is executing in
- HTML, you can specify using ES module by including `type` attribute with the value of `module` in the `script` element
- then import and use other modules
- example below create a module in HTML by specifying type to be module
index.html
```
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```
- use a module in the global scope that our HTML or other non-module JavaScript is executing in, then we must leak it into the global scope
    - attaching an event handler, or explicitly adding a function, to the global window object
index.html
```
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```
- we expose the `alertDisplay` imported module function by attaching it to the global JavaScript window object so that it can then be called from the button `onclick` handler. We also expose the module function by attaching a `keypress` event
- if the button is pushed, or a key is pressed our ES module function will be called

## Modules with Web Frameworks
- when you use a web framework bundler, usually don't have to worry about differentiating between global scope and ES module scope