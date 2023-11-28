# Web Frameworks
- providing tools for completing common application tasks
    - modularizing code
    - creating single page applications
    - simplifying reactivity
    - supporting diverse hardware devices
- some frameworks create new hybrid file formats that combine things like HTML and JavaScript into a single file

![popular framworks](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/introduction/stateofjs-webframeworks.jpg)

## Hello World Examples
- we will use the web framework React
- look at how the major frameworks would render a simple hello world application

### Vue
- combines HTML, CSS, and JavaScript into a single file
- HTML is represented by a `template` element that can be aggregated into other templates
**SFC**
```
<script>
  export default {
    data() {
      return {
        name: 'world',
      };
    },
  };
</script>

<style>
  p {
    color: green;
  }
</style>

<template>
  <p>Hello {{ name }}!</p>
</template>
```

### Svelte
- combines HTML, CSS, and JavaScript into a single file
- requires a transpiler to generate browser-ready code, instead of a runtime virtual DOM
**Svelte File**
```
<script>
  let name = 'world';
</script>

<style>
  p {
    color: green;
  }
</style>

<p>Hello {name}!</p>
```

### React
- combines JavaScript and HTML into its component format
- CSS must be declared outside of the JSX file
- highly leverages the functionality of JavaScript and can be represented as a function or class
**JSX**
```
import 'hello.css';

const Hello = () => {
  let name = 'world';

  return <p>Hello {name}</p>;
};
```
**CSS**
```
p {
  color: green;
}
```

### Angular Component
- defines what JavaScript, HTML, and CSS are combined together
- strong separation of files that are usually grouped together in a directory rather than using the single file representation
**JS**
```
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'world';
  }
}
```
**HTML**
```
<p>hello {{name}}</p>
```
**CSS**
```
p {
  color: green;
}
```