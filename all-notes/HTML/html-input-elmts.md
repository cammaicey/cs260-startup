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
![input type attr](https://github.com/cammaicey/startup/blob/e34b79df6ddde05fcb676df1e4f33dfd55e08691/images/type-input.jpg)
- In order to create an input you specify the desired type attribute along with any other attribute associated with that specific input
```
<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />
```
- most input elemnts have some common attributes
    - **name**: The name of the input. This is submitted as the name of the input if used in a form
    - **disabled**: Disables the ability for the user to interact with the input
    - **value**: The initial value of the input
    - **required**: Signifies that a value is required in order to be valid
- this what inputs looklike when rendered (no CSS)
![rendered inputs](https://github.com/webprogramming260/.github/raw/main/profile/html/input/htmlInput.jpg)

## Validating Input
- they will not accept a value that is not for example, a number, a URL, outside of a range, or an email address
- can also specify the `required` attribute on an input element to mark it as requiring a value before it can be submitted
- `pattern` attribute exists on `text`, `search`, `url`, `tel`, `email`, and `password` inputs
- should also have validation built into your JavaScript