# TypeScript
- adds static type checking to JavaScript
- type checking while you are writing the code to prevent mistakes
```
function increment(value) {
  return value + 1;
}

let count = 'one';
console.log(increment(count));
```
- this code executes the console will log `one1` because the count variable was accidentally initialized with a string
- TypeScript you explicitly define the types, and as the JavaScript is transpiled (with something like Babel) an error will be generated
- provide type safety for our increment function, it would look like this
```
function increment(value: number) {
  return value + 1;
}

let count: number = 'one';
console.log(increment(count));
```
- TypeScript enabled, VS Code will analyze the code and give you an error about the invalid type conversion

![VS code error message](https://github.com/webprogramming260/.github/blob/main/profile/webFrameworks/typeScript/typescriptBadAssignment.jpg)
- can define the types of object properties
- state for a React class style component, you can specify the types of all the state and property values
```
export class About extends React.Component {
  state: {
    imageUrl: string;
    quote: string;
    price: number;
  };

  constructor(props: { price: number }) {
    super(props);

    this.state = {
      imageUrl: '',
      quote: 'loading...',
      price: props.price,
    };
  }
}
```
- specify the type of a React function style component's properties with an inline object def
```
function Clicker(props: { initialCount: number }) {
  const [count, updateCount] = React.useState(props.initialCount);

  return <div onClick={() => updateCount(1 + count)}>Click count: {count}</div>;
}
```

## Interfaces
- common to define object property types, TypeScript introduced the use of the `interface` keyword
    - collection of parameters and types that an object must contain in order to satisfy the interface type
- Book interface might look like
```
interface Book {
  title: string;
  id: number;
}
```
- then create an object and pass it to a function that requires the interface
```
function catalog(book: Book) {
  console.log(`Cataloging ${book.title} with ID ${book.id}`);
}

const myBook = { title: 'Essentials', id: 2938 };
catalog(myBook);
```

## Beyond Type Checking
- warning you of potential uses of an uninitialized variable
- function may return null, but the code fails to check for this case

![fails to check](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/typeScript/typescriptUninitialized.jpg)
- correct this problem with a simple `if` block
```
const containerEl = document.querySelector<HTMLElement>('#picture');
if (containerEl) {
  const width = containerEl.offsetWidth;
}
```
- return type is coerced for the `querySelector` call
    - required because the assumed return type for that function is the base class Element, but we know that our query will return the subclass HTMLElement and so we need to cast that to the subclass with the querySelector<HTMLElement>() syntax

### Unions
- define the possible values for a new type
    - doing things like defining an enumerable
- plain JavaScript you might create an enumerable with a class
```
export class AuthState {
  static Unknown = new AuthState('unknown');
  static Authenticated = new AuthState('authenticated');
  static Unauthenticated = new AuthState('unauthenticated');

  constructor(name) {
    this.name = name;
  }
}
```
- TypeScript you can define this by declaring a new type and defining what its possible values are
```
type AuthState = 'unknown' | 'authenticated' | 'unauthenticated';

let auth: AuthState = 'authenticated';
```
- specify all of the possible types that a variable can represent
```
function square(n: number | string) {
  if (typeof n === 'string') {
    console.log(`{$n}^2`);
  } else {
    console.log(n * n);
  }
}
```

## Using TypeScript
- experiment with TypeScript you can use CodePen, or the official TypeScript playground
    - TypeScript playground has the advantage of showing you inline errors and what the resulting JavaScript will be
![typescript playground](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/typeScript/typescriptPlayground.jpg)
- use TypeScript in your web application you can create your project using the `create-react-app` CLI and specifying the `--template typescript` switch
```
npx create-react-app my-app --template typescript
```
- convert an existing application, then install the NPM typescript package to your development dependencies
```
npm install --save-dev typescript
```
- only include typescript package when you are developing and will not distribute it
- TypeScript installed for your project, you then configure how you want TypeScript to interact with your code by creating a `tsconfig.json`
- configured to have your source code in a directory named `src`, and you want to output to a directory named build then you would use the following TS config
```
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "build",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src/**/*"
  ]
}
```