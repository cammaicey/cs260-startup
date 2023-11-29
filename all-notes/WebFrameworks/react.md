# React
- focus on making reactive web page components that automatically update based on user interactions or changes in the underlying data
- abstracts HTML into a JavaScript variant called [JSX](https://reactjs.org/docs/introducing-jsx.html)
- JSX is converted into valid HTML and JavaScript using a preprocessor called [Babel](https://babeljs.io/)
JSX
```
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
```
Babel Conversion
```
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);
```
- `React.createElement` function will then generate DOM elements and monitor the data