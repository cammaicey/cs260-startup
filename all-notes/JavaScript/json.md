# JSON
- JavaScript Object Notation (JSON)
- conceived by Douglas Crockford in 2001
- official standardization in 2013 and 2017
- simple, and yet effective way, to share and store data

## Format
- contains one of the following data types
| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |
- Most commonly, a JSON document contains an object
    - zero or more key value pairs
    - key is always a string, and the value must be one of the valid JSON data types
    - delimited with commas
    - Curly braces delimit an object
    - square brackets and commas delimit arrays
    - strings are always delimited with double quotes
- JSON document
```
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
- always encoded with UTF-8

## Converting to JavaScript
- covert using `JSON.parse` and `JSON.stringify`
```
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```
- JSON cannot represent the JavaScript `undefined` object