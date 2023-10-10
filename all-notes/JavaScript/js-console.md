# JavaScript Console

## Log
- basic use of the console, output log message
```
console.log('hello');
// OUTPUT: hello
```
- create formatted messages in the log parameter
```
console.log('hello %s', 'world');
// OUTPUT: hello world
```
- specify CSS declarations in order to style the log output
```
console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text
```

## Timers
- wanna see how long something is taking?
- `time` and `timeEnd` outputs the duration from time to timeEnd
```
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```

## Count
- see how many times a block of code is called 
- `count`
```
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```