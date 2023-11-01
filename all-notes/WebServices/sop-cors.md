# SOP and CORS
- cross-origin requests
    - allowed JavaScript to make requests from one domain while displaying a website from a different domain
- to combat hackers `Same Origin Policy` (SOP) was amde
- allows JS to make requests to domain if it is same domain user is currently viewing
- request from `byu.iinstructure.com` to `byu.instructure.com` would fail because wrong domain
- wanna build a service any web app could use `Cross Origin Resource Sharing` (CORS) was made
- allows specify the origin of a request and then let the server respond with what origins are allowed
- may say that all origins are allowed or only a specific origin is allowed
- if nothing is provided browser assumes it must be same origin
- example of HTTP request `byu.iinstructure.com` to course authentication service `byu.instructure.com`
```
GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com
```
- response looks like this
```
HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com
```
- the browser would see this is wrong and blocks response with an error
- CORS, browser that is protecting user from accessing the course website's authentication endpoint from wrong origin
- CORS is meant to alert user that something nefarious is happening
- hacker can proxy request still and ignore `Access-Control-Allow-Origin` header
- so we gotta implement our own precautions

## Using Third Party Servcies
- wanna request different domain than the one your web app is hosted on, then you need to make sure that domain allows requests as defined by the `Access-Control-Allow-Origin` header
- `cs260.click` makes request to `i.picsum.photos` browser would fail the request with HTTP status code 403 and CORS error message

![attempting request failure](https://github.com/webprogramming260/.github/raw/main/profile/webServices/cors/webServicesCors.jpg)
- without header browser assume all requests must be made from same origin
- service request to `icanhazdadjoke.com` will return a `Access-Control-Allow-Origin` header with val of `*`, any origin can request
```
HTTP/2 200
access-control-allow-origin: *

Did you hear about the bread factory burning down? They say the business is toast.
```
- would also work if HTTP header explicity listed your web app domain
- request from `cs260.click` origin
```
HTTP/2 200
access-control-allow-origin: https://cs260.click

I’ll tell you something about German sausages, they’re the wurst
```
- test the services you want to use before including them
- make sure they respong with `*` or calling your origin