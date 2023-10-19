# Local Storage
- `localStorage` API provides the ability to persistently store and retrieve data (i.e. scores, usernames, etc.,)
- `localStorage` is also used as a cache for when data cannot be obtained from the server
    - frontend JavaScript could store the last high scores obtained from the service, and then display those scores in the future if the service is not available

## How to Use Local Storage
- four main funcs that can be used with `localStorage`
| Function             | Meaning                                      |
| -------------------- | -------------------------------------------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |
- local storage val must be `string`, `number`, or `boolean`
- wanna store JS array or obj?
    - convert to JSON string with `JSON.stringify()` on insertion
    - parse it back to JS with `JSON.parse()` when retrieved

## Example
- open startup and run code in dev tools console
```
let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));
```
- output:
```
Alice
{name: 'Bob', info: {favoriteClass: 'CS 260', likesCS: true}
[1, 'One', true]
```
- want to see what values are currently set for your application
    - open the `Application` tab of the dev tools
    - select `Storage > Local Storage`
    - domain name
- dev tools you can add, view, update, and delete any local storage values
![dev tools](https://github.com/webprogramming260/.github/raw/main/profile/javascript/localStorage/localStorageDevTools.png)