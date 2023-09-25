# Hypertext Markup Language
- originally designed to be a publishing format for web documents, or pages
- gone from web page --> web application
- a page represents a single page app `SPA` or large group of hyperlinked pages aka multi-page app `MPA`
- create a full web application we will need other technologies to style (CSS) our pages and make them interactive (JavaScript)
- `Hello World` text is valid in HTML 
    - need *elements* and their associated *tag*

## Elements and Tags
- paragraph element and it's tag `p`
- tags are delimited with `<` and `>`
    - closing tags will have `/` before the name
`<p>Hello World</p>`
- **html** element reps the top level page structure
- **head** element cotains metadata about the page and the page title
- **body** element reps content structure
- **main** element reps main content structure
```
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <main>
      <p>Hello world</p>
    </main>
  </body>
</html>
```
- when rendering this it will look the same as the text of Hello World
- the visual appearance won't change too much until we do CSS

## Attributes
- Attributes describe the specific details of the element
    - `id` attr gives unique ID to the element so that you can distinguish it from other elements
    - `class` designates the element as being classified into a named group of elements
- Attributes are written inside the element tag with a name followed by an optional value
    - can use either `'` or `"` to delimit atrr vals
```
<p id="hello" class="greeting">Hello world</p>
```

## Hyperlinks
- repped with an anchor `a` element w/ an atrr containing the address of hyperlink reference `href`
```
<a href="https://byu.edu">Go to the Y</a>
```

## Complete Example
- HTML defines a header `<!DOCTYPE html>`
    - tells the browser the type and version of the document
    - always include!!!!
```
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
    </main>
  </body>
</html>
```
![Visual Representation of the code above](https://github.com/webprogramming260/.github/raw/main/profile/html/introduction/htmlIntroduction.png)
- no styling because we need CSS

## Common Elements
- `html`: The page container
- `head`: Header information
- `title`: Title of the page
- `meta`: Metadata for the page such as character set or viewport settings
- `script`: JavaScript reference. Either a external reference, or inline
- `include`: External content reference
- `body`: The entire content body of the page 
- `header`: Header of the main content
- `footer`: Footer of the main content
- `nav`: Navigational inputs
- `main`: Main content of the page
- `section`: A section of the main content
- `aside`: side content from the main content
- `div`: A block division of content
- `span`: An inline span of content
- `h<1-9>`: Text heading. From h1, the highest level, down to h9, the lowest level
- `p`: A paragraph of text
- `b`: Bring attention
- `table`: Table
- `tr`: Table row
- `th`: Table header
- `td`: Table data
- `ol, ul`: Ordered or unordered list
- `li`: List item
- `a`: Anchor the text to a hyperlink
- `img`: Graphical image reference
- `dialog`: Interactive component such as a confirmation
- `form`: A collection of user input
- `input`: User input field
- `audio`: Audio content
- `video`: Video content
- `svg`: Scalable vector graphic content
- `iframe`: Inline frame of another HTML page

## Comments
- can inculde comments with `<!--` and `-->`
```
<!-- comment -->
```
- will be ignored when the browser renders

## Special Characters
- certain symbols need special syntax to be displayed
- **&** `&amp;`
- **<** `&lt;`
- **>** `&gt;`
- **"** `&quot;`
- **'** `&apos;`

## HTML Versions
![html versions]("C:\Users\Camrynn Helliwell\OneDrive\Pictures\Screenshots\cs260notes\html-versions.jpg")

## index.html
- default display will be `index.html`

## Rendering HTML
- can save any HTML file to your computer's disk and then open the file using your browser
- can also open the HTML file in VS Code and use the Live Server extension
- Another way to easily play with HTML is to use a sandbox like CodePen