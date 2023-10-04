# CSS Frameworks
- provide functions and components that commonly appear in web applications
![graph of frameworks](https://github.com/webprogramming260/.github/raw/main/profile/css/frameworks/cssStateOfCss.jpg)

## Tailwind
- rising contender in the CSS framework space
- moves much of the CSS representation out of the CSS file and directly into the HTML
```
<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="profile.png" />
  <p class="text-lg font-medium">“Tailwind CSS”</p>
</div>
```

## Bootstrap
- [required reading](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- defines the de facto look and feel of websites
### Getting Bootstrap
- referencing the Bootstrap CSS files from their content delivery network (CDN)
- then add the HTML link elements to your head element like this
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
```
- Bootstrap components that require JavaScript, also need to include Bootstrap's JavaScript module
    - following at the end of your HTML body element
```
<body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
```
- For future reference, to include Bootstrap in your application using NPM you would run the following from your console:
```
npm install bootstrap@5.2.3
```
- version specific (version 5 in this case). You will want to get the latest version links when you begin building your application.
### Using Bootstrap
- Once you have Bootstrap linked in your HTML files you can begin using the components
- button
    - `btn` CSS class
    - button gets a nice looking rounded appearance
    - `btn-primary` CSS class shades the button with the current primary color for the application
- bootstap vs vanilla
```
// Bootstrap styled button
<button type="button" class="btn btn-primary">Bootstrap</button>

// Default browser styled button
<button type="button">Plain</button>
```
![bootstrap vs vanilla](https://github.com/webprogramming260/.github/raw/main/profile/css/frameworks/cssBootstrapBtn.png)