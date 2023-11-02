# Node.js
- first successful application for deploying JavaScript outside of a browser
- JavaScript can power your entire technology stack
- browsers run JavaScript using a JavaScript interpreter and execution engine
- run JavaScript program in Chrome or Node.js, V8 that reads code and executes

![V8](https://github.com/webprogramming260/.github/raw/main/profile/webServices/node/webServicesNode.jpg)

## Installing NVM and Node.js
- install Node.js in your development environment if you have not already
- first install `Node Version Manager` (NVM) to use it to install and manage Node.js
- [nvm for windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)
```
➜ nvm install lts
➜ nvm use lts
```

## Checking that Node is Installed
- run this (versions may different which is fine)
```
➜ node -v
v18.13.0
```

## Running Programs
- can execute line of JS with Node.js using `-e` param
```
➜  node -e "console.log(1+1)"
2
```
- to do real work execute lots of code
- make single starting JS file like `index.js` which references the code found in rest of project
- execute code by running a `node` with `index.js` as param
- the JavaScript
```
function countdown() {
  let i = 0;
  while (i++ < 5) {
    console.log(`Counting ... ${i}`);
  }
}

countdown();
```
- executing with node
```
➜  node index.js
Counting ... 1
Counting ... 2
Counting ... 3
Counting ... 4
Counting ... 5
```
- can also run node in interpretive mode, executing without any params then typing the JavaScript directly
```
➜ node
Welcome to Node.js v16.15.1.
> 1+1
2
> console.log('hello')
hello
```

## Node Package Manager
- useful to use preexisting packages of JS for common tasks
- loading packages using node.js
    - install package locally on your machine using `Node Package Manager` (NPM)
    - include `require` statement in your code that references package name
- NPM is auto installed with Node.js
- [NPM Packages](https://www.npmjs.com/)
- before installing packages, initialize the code
    - create a directory that will contain the JS and then running `npm init`
    - series of questions will be asked, can press return to accept the defaults
    - `npm init -y` to skip the questions and accept defaults
```
➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y
```

## Package.json
- lst names in dir will make a file named `package.json`, contains 3 main things
    - metadata about projects such as its name and default JS
    - commands (scripts) you can execute to do things like run, test, or distribute code
    - packages that this project depends on
- follwing shows what `package.json` looks like (using the above example)
- has some default metadata, simple placeholder script thats runs echo when doing `npm run test`
```
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```
- now you could use it to install a node pckg
- install package with `npm intall` then the name
```
➜  npm install give-me-a-joke
```
- to remove use `npm uninstall <package name>`
- now looks like this
```
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "Simple Node.js demo",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "node index.js"
  },
  "dependencies": {
    "give-me-a-joke": "^0.5.1"
  }
}
```
- installing package dependencies, NPM will create an additional file named `package-lock.json` and a directory `named node_modules`
- `node_modules` has the actual JS
- make sure you include node_modules in your `.gitignore` file
- clone your source code from GitHub to a new location, the first thing you should do is run `npm install` in the project directory
- `package-lock.json` file tracks the version of the package that you installed
```
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
```
```
➜  node index.js
What do you call a fish with no eyes? A fsh.
```
- main steps
    1. Create your project directory
    2. Initialize it for use with NPM by running `npm init -y`
    3. Make sure `.gitignore` file contains `node_modules`
    4. Install any desired packages with `npm install <package name here>`
    5. Add `require('<package name here>')` to your application's JavaScript
    6. Use the code the package provides in your JavaScript
    7. Run your code with `node index.js`

## Creating a Web Service
- JavaScript we can write code that listens on a network port (e.g. 80, 443, 3000, or 8080), receives HTTP requests, processes them, and then responds
- use this to create a simple web service
1. create project
    ```
    ➜ mkdir webservicetest
    ➜ cd webservicetest
    ➜ npm init -y
    ```
2. open VS Code and create a file named index.js, paste the following code into the file and save
    ```
    const http = require('http');
    const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
    res.end();
    });

    server.listen(8080, () => {
    console.log(`Web service listening on port 8080`);
    });
    ```
- uses Node.js built in `http` package to create HTTP server using http.createServer func along with a callback func that takes request (`req`) and response (`res`) obj
- func is called whenever server receives an HTTP request
- in our example, the callback always returns same HTML snippet, with status code 200, and Content-Type header, no matter request is made
- basically this just simple dynamically generated HTML page
- real web service examine the HTTP path and return meaningful content based on purpose of endpoint
- `server.listen` call starts listening on port 8080 and blocks until the program is terminated
- execute by going console window and running Node.js
- service starts up correctly (see below)
```
➜ node index.js
Web service listening on port 8080
```
- open your browser and point it to localhost:8080 and view the result
- interaction between JS, node, and browser

![interaction](https://github.com/webprogramming260/.github/raw/main/profile/webServices/node/webServicesNodeHttp.jpg)
- different URL paths in the browser and note that it will echo the HTTP method and path
kill the process by pressing `CTRL-C`
- start up Node and execute the `index.js` code directly in VS
    - open index.js in VS Code and press the 'F5' key
    - select node.js