# CSS Selectors
```
<body>
  <h1>Departments</h1>
  <p>welcome message</p>
  <section id="physics">
    <h2>Physics</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
  <section id="chemistry">
    <h2>Chemistry</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
</body>
```
- currently this code would look like this
![curr code visual](https://github.com/webprogramming260/.github/raw/main/profile/css/selectors/cssSelectorBase.jpg)
- we want it to look like this
![what we want](https://github.com/webprogramming260/.github/raw/main/profile/css/selectors/cssSelectorFinal.jpg)

## Element Type Selector
- we want to make all elements in the document use a sans-serif font
    - can do using an element name selector
    ```
    body {
        font-family: sans-serif;
    }
    ```
    - this will cascade this font down the body of the document
        - can also use `*` to select all elements
- use element name selectors to give a bottom border to the top level heading
- modify the section elements to pop out with a gray background
- white space in the padding and margins
    ```
    h1 {
    border-bottom: thin black solid;
    }

    section {
    background: #eeeeee;
    padding: 0.25em;
    margin-bottom: 0.5em;
    }
    ```

## Combinators
- want to change the color of the second level headings
    - only want to do that within the sections for each department
    - `descendant combinator`
    - our selector would be all `h2` elements that are descendants of `section` elements.
    ```
    section h2 {
        color: #004400;
    }
    ```
- some combinators
![combinators](https://github.com/cammaicey/startup/blob/main/images/combinators.png?raw=true)