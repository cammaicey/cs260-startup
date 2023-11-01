# Fetch
- fetch API is preferred way to make HTTP requests
- `fetch` is built into browser's JavaScript runtime
    - means you call it from JS code running in browser
- basic usage, fetch URL return promise
- promise `then` function takes callback func that is asynchronously called
- if returned type is `application/json` can use `json` func
on response to convert to JS obj
- example of fetch request to get and display an inspirational quote
```
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```
- response
```
{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};
```
- do POST request, populate options parameter within HTTP method and headers
```
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```