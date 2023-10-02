# Cascading Style Sheets

- Cascading Style Sheets (CSS) converts the structure and content of HTML into a vibrant, responsive experience
- helping the developer create complex renderings of dynamic content that is responsive to the actions of the user and the device the application is rendered on
- can animate the page, deploy custom fonts, respond to user actions, and dynamically alter the entire layout of the page based on the size of a device and its orientation
- CSS is primarily concerned with defining rulesets
    - rule is comprised of a selector that selects the elements to apply the rule to
    - declarations that represent the property to style with the given property value
![CSS ruleset](https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssDefinitions.jpg)
```
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```
- selector `p` selects all paragraph elements in the HTML document
- four specified declarations
    - change the font
    - increase the font size
    - change the text color
    - create a gray shadow for the text
    ![Example CSS](https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssSimpleRule.jpg)

## Assosciating CSS with HTML
- three ways that you can associate
    - style attribute of an HTML element ```<p style="color:green">CSS</p>```
    - use the HTML style element to define CSS rules within the HTML document 
                ```
                <head>
                    <style>
                        p {
                        color: green;
                        }
                    </style>
                    </head>
                    <body>
                    <p>CSS</p>
                    </body>
                ```
        - style element should appear in the head element
            - the rules apply to all elements of the document
    - link element to create a hyperlink reference to an external file containing CSS rules
    - must appear in the head element of the document
    `<link rel="stylesheet" href="styles.css" />`
        ```p {
    color: green;
    }```
    - using the link element usually is the preferred way to define CSS

## Cascading Styles
- elements inherit the rules applied to their parents you often end up with the same declaration property applied to a single element multiple times
- In this case, the rules cascade down from the highest nodes in the DOM tree to the lowest level
- In Chrome right click on the element and select `inspect`
    - click on each element in the debugger and see what the value of the color property is
    - case defined, higher level declarations is crossed out until you get to the style explicitly defined
    ```
    <body>
        <p><span style="color:black">CSS</span></p>
    </body>
    ```
    ```
    body {
        color: red;
    }
    p {
        color: green;
    }
    span {
        color: blue;
    }
    ```
    ![Cascading Example](https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssCascading.jpg)

## Box Model
- CSS defines everything as boxes
- innermost box holds the element's content
    -  text or image of an element is displayed
- padding
    - inherit things like the background color
- border
    - properties like color, thickness and line style
- margin
    - external to the actual styling of the box and therefore only represents whitespace
![Box Model](https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssBoxModel.jpg)
- default, the width and height of an element is defined by the width and height of the content box
- can change the `box-sizing` CSS property from the default value of `content-box` to `border-box` in order to redefine the width and height to also include the padding and the border

## CSS Versions
- **1996, CSS1**: selectors, font, color, background, alignment, margin, border, padding
- **1998, CSS2**: positioning, z-index, bidirectional text, shadows
- **2011, CSS2.1**: removed incompatible features
- **1999-2021, CSS3**: enhancements for media, box, background, borders, color, template, multi-column, selectors