# JavaScript Async/Await
- `asyn/await` syntax provides more concise rep than promise
- `await`: wraps execution of promise and removed need to chain funcs
- `await`: block until the promise state moves to `fulfilled` or throws exception
```
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
```
- 
equivalent executions with either a promise `then/catch` chain, or an `await` with a `try/catch` block
```
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
```
```
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```

## Async
- 
cannot call await unless it is called at the top level or is in func defined with `async`
- applying async transforms the func, returns a promise that will resolve to the value that was previously returned by the func
    - turns any function into an asynchronous function, so that it can in turn make asynchronous requests
- demonstrated with a function that makes animal noises
    - notice that the return value is a simple string
```
function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
```
- if func is async return becomes a promise that is immediately resolved, has a value that is the return value of the func
```
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```
- explicitly create a promise instead of the automatically generated promise that the await keyword generates
```
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
```
- promise is in the pending state because the promise's execution function has not yet resolved

## Await
- `await` wraps call to `async` func, blocks execute until promise has resolved, returns result of promise
- demo `await`with cow promise from above
- log the output from invoking cow, we see that the return value is a promise
- if we prefix call to the func with the await, execution will stop until promise has resolved, result of the promise is returned instead of the actual promise object
```
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```
- combining `async`, to define funcs that return promises, with `await`, to wait on the promise, you can create asynchronous code, still maintains the flow without explicitly using callbacks

## Putting it all Together
- benefit when there cases requiring multiple promises
- calling `fetch` web APIon endpoint that returns JSON, need to resolve two promises
- one for network call one for converting result to JSON
- promise implementation
```
const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
```
- asnc/await, clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved
```
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse));
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
```