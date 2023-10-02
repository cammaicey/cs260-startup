# CSS Fonts
- `font-family` property defines what fonts should be used
    - represents an ordered list of fonts

## Font Families
- four major families of fonts
    - serif
        - small stroke attached to the ends of a character's major strokes
        - have the extra strokes
    - sans-serif
        - do not have the extra strokes
    - fixed
        - all are the same size
        - useful for lining up text when doing things like coding or displaying tabular data
    - symbol
        - represent non-language characters such as arrows or emojis

## Importing Fonts
- use the `@font-face` rule and provide the font name and source location
```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```
- do not want to host font files on your server, then you can load them from a font provider
- Google provides a large selection of open source fonts
- easiest way to use Google fonts is to use a CSS import statement to reference the Google Font Service
```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```