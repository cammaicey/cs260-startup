# Grid

- useful when you want to display a group of child elements in a responsive grid
- start with a container element with bunch of child elements
```
<div class="container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```
- turn this into a responsive grid
```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
- display: grid
    - tells the browser that all of the children of this element are to be displayed in a grid flow
- grid-template-columns
    - specifies the layout of the grid columns
- grid-auto-rows
    - we want all rows to be exactly 300 pixels high
- grid-gap
    - at least a 1 em gap between our grid items
