# JavaScript Regular Expressions
- think of regex as tetxual pattern matchers
- find text in a string so that you can replace it or just know it is there
- create reg ex using class constructor or reg ex literal
```
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```
- string class has several functions that accpet reg ex
    - replace
    - search
    - split
- for quick match test use reg ex obj. test func
```
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```