# Javascript String
- primitive type
- denoted by `'` or `"` or `` ` ``
- meaning of single or double quotes are equivalent
- backtick string literal that may contain JavaScript that is evaluated in place and concatenated into the string
    - replacement specifier is declared with a dollar sign followed by a curly brace pair
    - inside the curly braces is evaluated
    - backticks to create multiline strings without having to explicitly escape the newline characters using \n
```
'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```

## Unicode Support
-supports Unicode by defining a string as a 16-bit unsigned integer that represents UTF-16 strings

## String Functions
- commonly used funcitons
| Function      | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |
```
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
```