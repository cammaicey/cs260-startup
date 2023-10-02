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
-  use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading
```
h2 ~ p {
  padding-left: 0.5em;
}
```

## Class Selector
- class selector
- any element can have zero or more classifications applied to it
- our document has a class of `introduction` applied to the first paragraph
- class of `summary` applied to the final paragraph of each section
- bold the summary paragraphs `.summary`
```
.summary {
  font-weight: bold;
}
```
- can also combine the element name and class selectors to select all paragraphs with a class of summary
```
p.summary {
  font-weight: bold;
}
```

## ID Selector
- All IDs should be unique within an HTML doc
- To use the ID selector you prefix the ID with the hash symbol `#`
- putting a thin purple border along the left side of the physics section
```
#physics {
  border-left: solid 1em purple;
}
```

## Attribute Selector
- allow you to select elements based upon their attributes
- use an attribute selector to select any element with a given attribute `a[href]`
- specify a required value for an attribute, `a[href="./fish.png"]`, order for the selector to match
- Attribute selectors also support wildcards such as the ability to select attribute values containing specific text `p[href*="https://"]`
```
p[class='summary'] {
  color: red;
}
```

## Pseudo Selector
- select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes
- Suppose we want our purple highlight bar to appear only when the mouse hovers over the text
- To accomplish: change our ID selector to select whenever a section is hovered over
```
section:hover {
  border-left: solid 1em purple;
}
```