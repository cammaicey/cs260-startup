# Security Practice
- use a practice security web applications

## Gruyere
- provides tutorials and practice with things like Cross-site scripting (XSS), Denial of Service (DoS), SQL injection, and elevation of privilege attacks
- runs on Google AppEngine and so it is easy to start, play with, and reset when you want to start over

### Cross-Site Scripting (XSS)
1. Create an account in the Gruyere application using some bogus user name and password.
2. Navigate back to the home page.
3. Select the `New Snippets` option in order to create a snippet that will show on the home screen for all users of the application.
4. Paste the following into the snippet input box and press submit.
```
<img src="null" onerror="document.body.style.background='white'" />
```

![gruyere](https://github.com/webprogramming260/.github/raw/main/profile/security/practice/gruyereXssSnippetSubmit.jpg)

- any user of Gruyere goes to their home page they will see your snippet, and it will execute the JavaScript XSS attack and turn their body background color white
- logout of Gruyere and create a new user account, you will see that your attack works on all users

## Juice Shop
- OWASP security training app
- download the code for Juice Shop and run it from your own computer, but the advantage is that you have complete control over Juice Shop and it is a really good practice app
- interested in improving your security skills, you should take the time to install and explore Juice Shop
- installing
    1. Clone the Juice Shop repository to your development environment and install the required NPM packages.
    ```
    git clone https://github.com/juice-shop/juice-shop.git --depth 1

    cd juice-shop

    npm install
    ```
    2. Run the application. This should start Juice Shop on port 3000.
    ```
    npm start
    ```
    4. You can now open your browser to `localhost:3000`. This will display the Juice Shop application.
- suppose to learn by digging in and experimenting
- solve the first hacking challenge by discovering the hidden score board view that shows you all of the possible challenges to solve