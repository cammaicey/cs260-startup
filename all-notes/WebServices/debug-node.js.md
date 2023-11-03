# Debuggin Node.js
- `F5` to start debugging, pick node.js
- `SHIFT + F5` to end debugging
- `F10` to setp to next line
- `F11` to step into func

## Debugging a Node.js Web Service


## Nodemon
- - making chnages mid debug and want node auto restart
- [Nodmon Package](https://www.npmjs.com/package/nodemon) is a wrapper around node that watches files changing
- detects you saved and will auto update
- globally install
```
npm install -g nodemon
```
- config in VS code
    - `CTRL + SHIFT + P`
    - `Debig: Add configuration`
    - what type config? `Node.js`
    - select `Node.js: Nodemon setup`
    - change from `app.js` to `main.js` or whateve the main js file is
    - save config file