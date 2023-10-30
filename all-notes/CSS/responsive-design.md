# Responsive Design

- ability to reconfigure the interface so the application accommodates and takes advantage of the screen's size and orientation is called `responsive design`

## Display
- common options for the display property include

| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.                                                                       |
- By default div elements have a display property value of block
```
<div class="none">None</div>
<div class="block">Block</div>
<div class="inline">Inline1</div>
<div class="inline">Inline2</div>
<div class="flex">
  <div>FlexA</div>
  <div>FlexB</div>
  <div>FlexC</div>
  <div>FlexD</div>
</div>
<div class="grid">
  <div>GridA</div>
  <div>GridB</div>
  <div>GridC</div>
  <div>GridD</div>
</div>
```
- with default it would render like this
![rendered example code](https://github.com/webprogramming260/.github/raw/main/profile/css/responsive/cssDisplayDefault.jpg)
- now modify with this
```
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```
- looks like this
![exaple code rendered](https://github.com/webprogramming260/.github/raw/main/profile/css/responsive/cssDisplay.jpg)

## Viewport Meta Tag
- meta tag in the head element of all your HTML pages
- This tells the browser to not scale the page
```<meta name="viewport" content="width=device-width,initial-scale=1" />```

## Float
- moves an element to the left or right of its container element and allows inline elements to wrap around it
```
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```
- browser resizes, the text will flow around the floating element

## Media Queries
- main CSS features for creating responsive applications
    - `@media` selector
    - dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change
```
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
```
- use media queries to make entire pieces of your application disappear or move to a different location
- use following to make thing dissapear if it doesn't fit
```
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
```

## Grid and Flexbox
- both CSS display modes that automatically respond to screen sizes to position and resize their child elements
