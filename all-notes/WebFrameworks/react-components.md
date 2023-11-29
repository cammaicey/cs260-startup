# Components
- allow you to modularize the functionality of your application
- underlying code to directly represent the components that a user interacts with
- code reuse as common application components often show up

## Render Function
- generate the user interface
- returned from the `render` function is inserted into the component HTML element
JSX
```
<div>
  Component: <Demo />
</div>
```
React Component
```
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
```
Result
```
<div>Component: <b>Hello world</b></div>
```

## Properties
- allow you to pass information to them in the form of element properties
- receives the properties in its constructor and then can display them when it renders
JSX
```
<div>Component: <Demo who="Walke" /><div>
```
React Component
```
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
```
Result
```
<div>Component: <b>Hello Walke</b></div>
```

## State
- component can have internal state
- created by calling the `React.useState` hook func
- `useState` function returns a variable that contains the current state and a function to update the state
- state variable called `clicked` and toggles the click state in the updateClicked func
```
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```
- can use JSX even without a func
```
const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));
```

## Class Style Components
- React also supports `class style` components
- React team is moving away from this
- equivalent class style component for the Clicker component that we created
- properties are loaded on the constructor and state is set using a setState function on the component object
```
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

## Reactivity
- controls how a component reacts to actions taken by the user or events
- state or properties change, the `render` function for the component and all of its dependent component `render` functions are called