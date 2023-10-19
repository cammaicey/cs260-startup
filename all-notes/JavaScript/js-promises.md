# Promises
- JS executes as a single threaded
    - there is only ever one piece of code executing at the same time
- does not execute concurrently does not mean it does not execute in parallel
- asynchronously execute code with `promise`
- promise obj can be in one of three states at any point
    1. **Pending**: curr running async
    2. **Fulfilled**: complete successfully
    3. **Rejected**: faile to complete
- make promise: call Promise obj constructor and pass ot an executor func which runs async operation
- executing async means constructor may return before promise executor func runs
- JS `setTimeout` func to create a delay in the execution of the code
    - setTimeout func takes the num of milliseconds to wait and a func to call after that amount of time expired
    - delay func in for loop in promise executor, also a for loop outside promise so that both code blocks are running in parallel
```
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

## Resolving and Rejecting
- we need to set state to  `fulfilled` when completed or `rejected` when error
- promise executer func takes two funcs s params, `resolve` and `reject`
- resolve sets promise to fulfilled state
- reject sets promise state to rejected state
```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```
- if you long coinToss promise obj right after calling constructor, `pending`
```
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```
- wait 10 sec then log again, will show `fulfilled` or `rejected`
```
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

## Then, Catch, Finally
- now doing something with all of that
- done using similar functionality to exceptions
- promise obj has three funcs
    - `then`: called if promise is fulfilled
    - `catch`: called if promise rejected 
    - `finally`: always called after processing is complete
- rework coinToss, coin falls 10% of time otherwise results in "heads" or "tails"
```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```
- then calc `then`, `catch`, and `finally` funcs to coingToss obj to handle each process
```
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

## The Observer Pattern
- promises not only way to do async processing, `Observer`
- Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into
- allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution