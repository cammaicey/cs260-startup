# UI Testing
- UI testing is very difficult
- there are a lot of factors to consider

## Automating the Browser - Palywright
- `Selenium` first popular tool to automate the browser
    - considered flaky and slow
    - means test fails can be unpredictable in unreproducible ways
- now a lot of alternatives exist
- a telling stat is frameworks' ability to retain users

![automated browser framework](https://github.com/webprogramming260/.github/raw/main/profile/webServices/uiTesting/javascriptStateOfJsTesting.jpg)
- we're using `Playwright`
    - back by Microsoft
    - intergrates well with VS
    - runs Node.js
    - one of the least flaky testing frameworks
- consider the following HTML
```
<body>
  <p id="welcome" data-testid="msg">Hello world</p>
  <button onclick="changeWelcome()">change welcome</button>
  <script>
    function changeWelcome() {
      const welcomeEl = document.querySelector('#welcome');
      welcomeEl.textContent = 'I feel welcomed';
    }
  </script>
</body>
```
- install Playwright in directory
```
npm init playwright@latest
```
- install the Playwright extension for VS `Playwright Test for VSCode`
- paste this code over the code in `tests.example.spec.js`
```
import { test, expect } from '@playwright/test';

test('testWelcomeButton', async ({ page }) => {
  // Navigate to the welcome page
  await page.goto('http://localhost:5500/');

  // Get the target element and make sure it is in the correct starting state
  const hello = page.getByTestId('msg');
  await expect(hello).toHaveText('Hello world');

  // Press the button
  const changeBtn = page.getByRole('button', { name: 'change welcome' });
  await changeBtn.click();

  // Expect that the change happened correctly
  await expect(hello).toHaveText('I feel not welcomed');
});
```
- test makes sure you can successfully navigate to the desired page

## Testing Various Devices - BrowserStack
- BrowserStack lets you pick from a long list of physical devices that you can run interactively, or use when driving automated tests with Selenium
- partial list of iPhone devices

![iphones](https://github.com/webprogramming260/.github/raw/main/profile/webServices/uiTesting/javaScriptBrowserStackDevices.png)
- when launch device, connects the browser interface to a physical device hosted in a data center
- use of BrowserStack to experiment with an iPhone 14 running iOS 16

![BrowserStack on Iphone](https://github.com/webprogramming260/.github/raw/main/profile/webServices/uiTesting/javaScriptBrowserStackIPhone.png)