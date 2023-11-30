# React Hooks
- allow React function style components to be able to do everything that a class style component can do
- as new features are added to React they are including them as hooks
- hooks to declare and update state in a function component with the useState
```
function Clicker({initialCount}) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

ReactDOM.render(<Clicker initialCount={3} />, document.getElementById('root'));
```

## useEffect Hook
- allows you to represent lifecycle events
- run a function every time the component completes rendering
```
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
- component cleans up by returning a cleanup function from the function registered with `useEffect`
- every time the component is clicked the state changes and so the component is rerendered
- both the cleanup function to be called in addition to the hook
```
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
- useful when you want to create side effects for things such as tracking when a component is displayed or hidden, or creating and disposing of resources

## Hook Dependencies
- control what triggers a `useEffect` hook by specifying its dependencies
- we have two state variables, but we only want the `useEffect` hook to be called when the component is initially called and when the first variable is clicked
- pass an array of dependencies as a second parameter to the `useEffect` call
```
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
- specify and empty array [] as the hook dependency then it is only called when the component is first rendered
- hooks can only be used in function style components and must be called at the top scope of the function
- cannot be called inside of a loop or conditional
- restriction ensures that hooks are always called in the same order