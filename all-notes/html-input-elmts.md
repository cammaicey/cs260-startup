# HTML Input Elements
![input elements](https://github.com/cammaicey/startup/blob/main/images/html-input-elements.jpg)

## Form Element
- main purpose of `form` submit the values of the inputs it contains
- Just remember that you are not required to have a form element to use input elements
- example of `textarea` element
```
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```
- Pressing the submit button sends the following data to the web server
- generates the data by combining the textarea's `name` attribute with the current value of the textarea

## Input Element
-  represents many different input types
- set the type of input with the `type` attr
