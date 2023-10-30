# Web Services Introduction
- as of now the website is loaded from the web server
- all of the files running on the browser comprise the `frontend`
- when frontend requests it uses HTTPS protocal

![alt text](https://github.com/webprogramming260/.github/blob/main/profile/webServices/introduction/frontEnd.png)

- from the frontedn JS you can make requests to external services
    - web service request, we supply the URL of the web service to the `fetch` function that is built into the browser

![fetching](https://github.com/webprogramming260/.github/blob/main/profile/webServices/introduction/frontEndFetch.png)

- time to create our own web service
    - static frontend files
    - functions to handle `fetch` requests
- functionality provided by your web service represents the backend of your application
- functions provided by a web service are called `endpoints`, or sometimes APIs

![backend](https://github.com/webprogramming260/.github/raw/main/profile/webServices/introduction/backEnd.png)

- backend web service can also use `fetch` to make requests
- image below the frontend uses `fetch` to request the user's data from the backend web service
- backend then uses `fetch` to call two other web services, one to get the user's data from the database, and another one to request subway routes that are near the user's home

![backend fetch](https://github.com/webprogramming260/.github/blob/main/profile/webServices/introduction/backEndFetch.png)

- how to use fetch, HTTP, and URLs, and build a web service using the Node.js application