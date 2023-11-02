# Express
- Node package `Express`
    1. Routing requests for service endpoints
    2. Manipulating HTTP requests with JSON body content
    3. Generating HTTP responses
    4. Using `middleware` to add functionality
- revolves around creating and using HTTP routing and middleware funcs
- using NPM to install Express then call `express` constructor to create express application and listen for HTTP requests on a desired port
```
➜ npm install express
```
```
const express = require('express');
const app = express();

app.listen(8080);
```
- `app` object you can now add HTTP routing and middleware funcs

## Defining Routes
- HTTP endpoints implemented in Express defining routes that call funct based on HTTP path
- Express `app` obj supports all HTTP verbs as funcs on the obj
- For example, if you want route func that handles HTTP GET request for URL path `/store/provo` you would call `get` method on the app
```
app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
```
- `get` has two params, URL path matching pattern and callback func
- callback function has three parameters, HTTP request object (`req`), the HTTP response object (`res`), and the `next` routing func
- Express `app` compares the routing func patterns in order that they added to Express app obj
- if two routing funcs with patterns both match, the first one that was added will be called and given the next matching func in the next param
- hard coded the store name to be `provo`
- real store endpoint would allow any store name to be provided
- prefixing the parameter name with a colon (`:`)
- creates a map of path parameters and populates it with the matching values found in the URL path
- reference the parameters using the `req.params` obj
- using this pattern you can rewrite our getStore endpoint as follows
```
app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
```
- run JavaScript using `node` can see result when HTTP request using `curl`
```
➜ curl localhost:8080/store/orem
{"name":"orem"}
```
- want endpoint that used POST or DELETE HTTP verb then use `post` or `delete` funct on the Express `app` obj
- route path can also include a limited wildcard syntax or even full regular expressions
- route functions using different pattern syntax
```
// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));
```
- these examples the `next` param was omitted
- not calling `next` we do not need to include it as a param
- if do not call `next` no following middleware funcs invoked for request

## Using Middleware
- stadard design pattern has two pieces
    - **mediator**: loads the middleware components and determines their order of execution
    - **middleware**: componentized pieces of functionality
- standard set of middleware, provide functionality like routing, authentication, CORS, sessions, serving static web files, cookies, and logging
- provided by default, and other ones must be installed using NPM
- middleware function looks very similar to a routing func
- routing functions are also middleware
- routing functions are only called if the associated pattern matches
- middleware always called for every HTTP request unless a preceding middleware function does not call `next`
- middleware func pattern
```
function middlewareName(req, res, next)
```
- params rep HTTP request obj (`req`), HTTP response obj (`res`), `next` middleware func to pass processing
- usually call the next function after completing processing

![middleware](https://github.com/webprogramming260/.github/raw/main/profile/webServices/express/webServicesMiddleware.jpg)

### Creating Your Own Middleware
- example
```
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
```
- order you add middleware to Express app obj controls order the middleware funcs are called
- middleware doesn't call `next` func after doing its processing, stops middleware chain

### Builtin Middleware
- example of using the `static` middleware, responds with static files, found in a given directory, that match the request UR
```
app.use(express.static('public'));
```
- create a subdirectory name it `public` you can serve up any static content
- call your web service without any path index.html file will be returned

### Third Party Middleware
- using NPM to install package and including package in your JavaScript with `require` func
- following uses the `cookie-parser` package
```
➜ npm install cookie-parser
```
```
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});
```
- common for middleware to add fields and funcs to `req` and `res` obj

## Error Handling Middleware
- similar to other middleware funcs
- takes an additional err param, contains the error
```
function errorMiddlewareName(err, req, res, next)
```
- add a simple error handler for anything that might go wrong while processing HTTP requests you could add
```
app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});
```
- test that our error middleware is getting used by adding a new endpoint that generates an error
```
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});
```
- if we use curl to call our error endpoint we can see that the response comes from the error middleware
```
➜ curl localhost:8080/error
{"type":"Error","message":"Trouble in river city"}
```

## Putting it all Together
```
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```