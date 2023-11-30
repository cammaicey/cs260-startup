# Reactivity
- enables reactivity with three major pieces of a React component: `props`, `state`, and `render`
- rendered, React parses the JSX and creates a list of any references to the component's `state` or `prop`
- detects that they have changed it will call the component's `render` func
- following example contains two components: a parent `<Survey/>` component and a child `<Question/>` compo
- Survey has a state named `color`
- Question has a property named `color`
- Survey passes its color state Question's color
-  any change to the Survey's color will also be reflected in the Question's color
- The Question component also has a state named answer. The value of answer is displayed as part of the Question's content. The user can interact with this state through HTML radio input elements. When one of the inputs is changed the Question's onChange function is called and the answer state is updated to reflect the user's choice. This automatically causes the display of the answer to be updated.
- Be careful about your assumptions of when state is updated. Just because you called updateState does not mean that you can access the updated state on the next line of code. The update happens asynchronously, and therefore you never really know when it is going to happen; you only know that it will eventually happen.
```
// The Survey component
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };
  return (
    <div>
      <h1>Survey</h1>
      {/* Pass the Survey color state as a property to the Question.
          When the color changes the Question property will also be updated and rendered. */}
      <Question color={color} />

      <p>
        <span>Pick a color: </span>
        {/* Pass the Survey color state as a property to the input element.
            When the color changes, the input property will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ color }) => {
  const [answer, updateAnswer] = React.useState('pending...');

  function onChange({ target }) {
    updateAnswer(target.value);
  }

  return (
    <div>
      <span>Do you like this</span>
      {/* Color rerendered whenever the property changes */}
      <span style={{ color: color }}> color</span>?
      <label>
        <input type='radio' name='answer' value='yes' onChange={(e) => onChange(e)} />
        Yes
      </label>
      <label>
        <input type='radio' name='answer' value='no' onChange={(e) => onChange(e)} />
        No
      </label>
      {/* Answer rerendered whenever the state changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));
```