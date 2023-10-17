# JavaScript Objects and Classes
- JS obj reps a collection of name value pairs called properties
    - prop name must be type string or symbol but value can be any type
- common obj-oriented functionality
    - constructors
    - `this` pointer
    - statis props
    - functions
    - inheritance
- objs can be created with the new operator
    - causes obj constructor to be called
    - after declared you can add props by reffing prop name
    - any type var can be assigned to prop
        - sub-obj
        - array
        - func
    - prop of obj reffed with either `obj.prop` or `obj['prop]`
```
const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```
- dynamically modifying objects is very useful when manipulating data with an indeterminate structure

## Object-Literals
- declare var of obj type with `object-literal` syntax
- allows to provide initial composition of the obj
```
const obj = {
  a: 3,
  b: 'fish',
};
```

## Object Functions
- several interesting static funcs
- some common ones
| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |
```
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

## Constructor
- any func that returns obj is constructor
- can be invoked with `new` operator
```
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```
- Because objs can have any type prop val you can create methods on the object as part of its encapsulation
```
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

## This Pointer
- keyword `this`
- `this` depends on scope where it is used
- for obj it refers to pointer to obj

## Classes
- class to define obj
- clarifies intent for reusable component
- looks similar to obj declaration but instead have explicit constructor and assumed func declares
- person obj from earlier with class
```
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```
- can make prop and func of classes private with `#`
```
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```

## Inheritance
- `extend` to define inheritence
- params to be passed to parent class use `super`
- parent func explicit access using `super`
```
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```