# Document Object Model
- obj rep of HTML elements that the browser uses to render the display
- exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML
- access to the DOM through a global variable name `document`
    - points to the root element of the DOM
```
> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
```
```
p {
  color: red;
}
```
- For everything in an HTML document there is a node in the DOM
- All of these nodes form a big tree, with the document node at the top
![diagram](https://github.com/webprogramming260/.github/raw/main/profile/javascript/dom/dom.jpg)

## Accessing the DOM
- Every element in an HTML document implements the DOM Element interface
    - derived from the DOM Node interface
- DOM elemt interface provides means for iterating child elements, accessing the parent element, and manipulating the element's attributes
- from JS code start with the `document` variable and walk through the every element in the tree
```
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```
- provide a CSS selector to the `querySelectorAll` function in order to select elements from the document
- `textContent` property contains all of the element's text
- textual representation of an element's HTML content with the `innerHTML` property
```
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

## Modifying the DOM
- DOM supports the ability to insert, modify, or delete the elements in the DOM
- new element you first create the element on the DOM doc
- insert the new element into the DOM tree by appending it to an existing element in the tree
```
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```
- to delete `removeChild` func on parent element
```
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

## Injecting HTML
- also allows you to inject entire blocks of HTML into an element
- first div element in the DOM and replaces all the HTML it contains
```
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```
- directly injecting HTML as a block of text is a common attack vector for hackers
    - that JavaScript can represent itself as the current user of the application
    - can then make requests for sensitive data, monitor activity, and steal credentials
- shows how the img element can be used to launch an attack as soon as the page is loaded
```
<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
```
- make sure that it cannot be manipulated by a user
- Common injection paths include HTML input controls, URL parameters, and HTTP headers
- sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`

## Event Listeners
- DOM elements support the ability to attach a function that gets called when an event occurs
- these funcs called event listeners
- example of event listener
```
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
- lots of possible events that you can add a listener
    - mouse
    - keyboard
    - scrolling
    - animation
    - video
    - audio
    - WebSocket
    - clipboard
- some more common ones

| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

- also add event listeners directly in the HTML
- here is a onclick handler
```
<button onclick='alert("clicked")'>click me</button>
```
