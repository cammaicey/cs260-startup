# Account Creation and Login
- a way for users to uniqueley define themselves
- usually requires two service endpoints
    - one to create authentication cred
    - second to authenticate on future visits (login)
- web services often have a `getMe` endpoint that gives information about the currently authenticated user

## Endpoint Design
- HTTP we can map out the design of each of our endpoints

### Create Authentication Endpoint
- takes an email and password and returns a cookie containing the authentication token and user ID
- email already exists it returns a 409 (conflict) status code
```
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```
```
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

### Login Authentication Endpoint
- takes an email and password and returns a cookie containing the authentication token and user ID
- email does not exist or the password is bad it returns a 401 (unauthorized) status code
```
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```
```
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

### GetMe Endpoint
- uses the authentication token stored in the cookie to look up and return information about the authenticated user
- token or user do not exist it returns a 401 (unauthorized) status code
```
GET /user/me HTTP/2
Cookie: auth=tokenHere
```
```
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}
```

## Web Service
- service endpoints designed, we can now build our web service using Express
```
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```
- follow this then add in the code from the sections that follow
    1. Create a directory called `authTest` that we will work in
    2. Save the above content to a file named `main.js`. This is our starting web service
    3. Run `npm init -y` to initialize the project to work with node.js
    4. Run `npm install express cookie-parser mongodb uuid bcrypt` to install all of the packages we are going to use.
    5. Run `node main.js` or press `F5` in VS Code to start up the web service
    6. You can now open a console window and use `curl` to try out one of the endpoints
    ```
    curl -X POST localhost:8080/auth/create
    ```
    ```
    {"id":"user@id.com"}
    ```

## Handling Requests
- basic service created, we can now implement the create authentication endpoint
- first step is to read the credentials from the body of the HTTP request
- body is designed to contain JSON we need to tell Express that it should parse HTTP requests ontent type of `application/json`, automatically into a JavaScript object
- `express.json` middleware
- read the email and password directly out of the `req.body` object
```
app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});
```
```
curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'
```
```
{"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}
```
- have proven that we can parse the request bodies correctly, we can change the code to add a check to see if we already have a user with that email address
- immediately return a 409 (conflict) status code if there is an existing user
- else create a new user
```
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
```

## Using the Database
- store our users in Mongo and so we need to set up our code to connect to and use the database
```
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```
- Mongo collection object we can implement the getUser and createUser functions
```
function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}
```

## Generating Authentication Tokens
- generate a reasonable authentication token we use the `uuid` package
```
const uuid = require('uuid');

token: uuid.v4();
```

## Securing Passwords
- cryptographically hash the password so that we never store the actual password
- validate a password during login, we can hash the login password and compare it to our stored hash of the password
- use the `bcrypt` package
```
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```

## Passing Authentication Tokens
- pass our generated authentication token to the browser when the login endpoint is called, and get it back on subsequent reqs
- `cookie-parser` package provides middleware for cookies and so we will leverage that
- storing an authentication token in the cookie, we want to make it as secure as possible, and so we use the `httpOnly`, `secure`, and `sameSite` options
    - `httpOnly` tells the browser to not allow JavaScript running on the browser to read the cookie
    - `secure` requires HTTPS to be used when sending the cookie back to the server
    - `sameSite` will only return the cookie to the domain that generated it
```
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
```

## Login Endpoint
- login authorization endpoint needs to get the hashed password from the database, compare it to the provided password using `bcrypt.compare`, and if successful set the authentication token in the cookie
- does not match, or there is no user with the given email, the endpoint returns status 401
```
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## GetMe Endpoint
- implement the `getMe` endpoint to demonstrate that it all actually works
- user object from the database by querying on the authentication token
- is not an authentication token, or there is no user with that token, we return status 401
```
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## Final Code
- full example code
```
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

## Experiment
- use `curl` to try it out
- start up the web service from VS Code by pressing `F5`
- console window and run the following `curl` commands
- the `-c` and `-b` parameters tell curl to store and use cookies with the given file
```
curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'
```
```
{"id":"639bb9d644416bf7278dde44"}
```
```
{"id":"639bb9d644416bf7278dde44"}
```
```
curl -b cookie.txt localhost:8080/user/me
```
```
{"email":"지안@id.com"}
```