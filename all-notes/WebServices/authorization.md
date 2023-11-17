# Authorization Services
- a way to uniquely associate the data with a particular credential
- usually means that you `authenticate` a user by asking for information, such as an email address and password
- storing an `authentication token` on the user's device
- token is stored in a cookie that is passed back to your web service on each request
- can now associate data that the user supplies with a unique identifier that corresponds to their authorization token

![authentication](https://github.com/webprogramming260/.github/raw/main/profile/webServices/authorizationServices/authServiceAuthenticate.jpg)

- what a user is `authorized` to do in your application is also important
- authenticate a user and store information about that user, also store the authorization

![authorization](https://github.com/webprogramming260/.github/raw/main/profile/webServices/authorizationServices/authServiceAuthorize.jpg)

- authentication and authorization can become very complex, very quickly
- authorization services often use standard protocols for authenticating and authorizing. These include standards such as OAuth, SAML, and OIDC
- federated login allows a user to log in once, and then the authentication token is reused to automatically log the user in to multiple websites