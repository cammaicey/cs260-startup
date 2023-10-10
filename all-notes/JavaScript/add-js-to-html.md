# Adding JavaScript to HTML

- directly insert with `<script>` element or using `src` attribute to reference a JS file
- index.js
```
function sayHello() {
  console.log('hello');
}
```
- index.html
```
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```
- for the buttons the two JS functions are called with `onclick` attribute