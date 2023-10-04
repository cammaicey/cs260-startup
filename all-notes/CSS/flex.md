# CSS Flexbox

- `flex` display layout is useful when you want to partition your application into areas that responsively move
- example html
```
<body>
  <header>
    <h1>CSS flex &amp; media query</h1>
  </header>
  <main>
    <section>
      <h2>Controls</h2>
    </section>
    <section>
      <h2>Content</h2>
    </section>
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</body>
```
- use flexbox to make it ocme alive
- display property with the value of flex
    - all of the children of this element are to be displayed in a flex flow
- flex-direction property with a value of column
    - top level flexbox children to be column oriented
- add some simple other declarations to zero out the margin and fill the entire viewport with our application frame
```
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
```
- To get the division of space for the flexbox children correct we add the following flex properties to each of the children
- **header**: flex: 0 80px
    - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels
- **footer**: flex: 0 30px
    - it will not grow and has a height of 30 pixels
- **main**: flex: 1
    - get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space
    - set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side
```
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
```
- just need to add CSS to the control and content areas represented by the two child section elements
- controls to have 25% of the space and the content to have the remaining
    - set the `flex` property value to 1 and 3 respectively
```
section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}
```

## Media Query
- also want to handle small screen sizes
- add some media queries that drop the header and footer if the viewport gets too short
- orient the main sections as rows if it gets too narrow
- support the narrow screen (portrait mode)
    - include a media query that detects when we are in portrait orientation and sets the `flex-direction` of the main element to be column instead of row
- making our header and footer disappear
    - media query that triggers when our viewport height has a maximum value of 700 pixels
    - true we change the display property for both the header and the footer to none so that they will be hidden