# Endpoint Testing
- test driven development (TDD) for testing service endpoints is common

![good testing packages](https://github.com/webprogramming260/.github/raw/main/profile/webServices/endpointTesting/webServicesStateOfJsEndpointTesting.jpg)
- we will work with Jest
- create a test directory, install Express, and open up VS Code
```
mkdir testJest
cd testJest
npm init -y
npm install express
code .
```
- create a file named server.js and use Express to create an application with two endpoints: one to get a store (getStore), and another to update a store
```
const express = require('express');
const app = express();

app.use(express.json());

// Endpoints
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});

app.put('/store/:storeName', (req, res) => {
  req.body.updated = true;
  res.send(req.body);
});

module.exports = app;
```
- allow Jest to start up the HTTP server when running tests, we initialize the application a little bit differently
- normally, we would have just started listening on the Express app object after we defined our endpoints
- now we export the Express app object from our server.js file and then import the app object in the index.js file that is used to run our service
```
const app = require('./server');

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```
- Breaking apart the definition of the service from the starting of the service allows us to start the service both when we run normally and also when using our testing framework

![jest endpoint](https://github.com/webprogramming260/.github/raw/main/profile/webServices/endpointTesting/endpointTestingJest.jpg)
- test that the service is working properly by running the service in the VS Code debugger and pressing F5 while viewing the index.js
- open a browser and navigate to `http://localhost:8080/store/provo`
- Stop the debugging session once you have demonstrated that the service is working correctly
- launch the service using Jest we create another file that has a suffix of .test.js
- that suffix is considered a testing file and will automatically be discovered by Jest and examined for tests to run

## A Simple Test
- test is created by calling the Jest `test` func
    - don't need to include a require statement to import Jest functions into your code
- creating a file named store.test.js and pasting in the following code
```
test('that equal values are equal', () => {
  expect(false).toBe(true);
});
```
- test func takes a description as the first param
- description is meant to be human readable
    - reads: "test that equal values are equal"
- second param is the func to call
    - calls the Jest expect function and chains it to the toBe func
    - can read this as "expect false to be true", which of course is not true, but we want to see our test fail the first time we run it
- we need to install the Jest package using NPM
- console install the package
- keeps it from being included when we do production release builds
- `-D` parameter tells NPM to install Jest as a development package
```
npm install jest -D
```
- replace the scripts section of the package.json file with a new command that will run our tests with Jest
- replace the `scripts` section of the `package.json` file with a new command that will run our tests with Jest
```
"scripts": {
  "test": "jest"
},
```
- can run the `test` command and our test will execute
- shows exactly where the test failed and what expected values were not received
```
➜ npm run test

 FAIL  ./store.test.js
  ✕ that unequal values are not equal (1 ms)

  ● that unequal values are not equal

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      3 |
      4 | test('that unequal values are not equal', () => {
    > 5 |   expect(false).toBe(true);
        |                 ^
      6 | });
      7 |
      8 | // describe('endpoints', () => {

      at Object.toBe (store.test.js:5:17)

Tests:       1 failed, 1 total
```
- fix our test by rewriting it so that the expected value matches the provided value
- store.tests.js
```
test('that equal values are equal', () => {
  expect(true).toBe(true);
});
```
- now it should pass
```
➜  npm run test

 PASS  ./store.test.js
  ✓ that equal values are equal (1 ms)

Tests:       1 passed, 1 total
```
- didn't actually test any of our code, but it does demonstrate how easy it is to write tests
- real test function would call code in your program

## Testing Endpoints
- need another package so that we can make HTTP requests without having to actually send them over the network
- NPM package called `supertest`
```
npm install supertest -D
```
- then alter `store.test.js` to import our Express service and also the `request` function from `supertest` that we will use to make HTTP requests
- to make HTTP request pass the Express `app` to the `supertest` `request` function and then chain on the HTTP verb function that you want to call, along with the endpoint path
- then chain on as many `expect` functions as you want
- following example we will expect an HTTP status code of 200 (OK), and that the body of the response contains the object that we expect the endpoint to return
- something goes wrong, the `end` func will contain an error and we pass the error along to the `done` func
    - otherwise we just call done without the error
- store.test.js
```
const request = require('supertest');
const app = require('./server');

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
```
- run this test passes without error
```
➜  npm run test

 PASS  ./store.test.js
  ✓ getStore returns the desired store (16 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.237 s, estimated 1 s
```
- change the test to expect a status code of 500 (Server Error) if you want to see the test fail
- change the endpoint code to return a 201 status code (Created) and also see the test fail
- add a test for the updateStore endpoint
- copy the getStore endpoint, change the description, change the HTTP function verb to `put`, and send the body of the `put` request using the chained `send` func
```
const request = require('supertest');
const app = require('./server');

test('updateStore saves the correct values', (done) => {
  request(app)
    .put('/store/provo')
    .send({ items: ['fish', 'milk'] })
    .expect(200)
    .expect({ items: ['fish', 'milk'], updated: true })
    .end((err) => (err ? done(err) : done()));
});

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
```
- great thing about test driven development (TDD) is that you can actually write your tests first and then write your code based upon the design represented by the tests
- tests pass you know your code is complete