# HTTP
- Hypertext Transfer Protocol (HTTP)
- this is how web talks
- request to web server uses HTTP protocol
- see the HTTP exchange using browser debugger or `curl` in the console
```
curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
```

## Request
- HTTP request for example above
```
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```
- HTTP request general syntax
```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```
- first line or request contains `verb`, then path, parameters, and an anchor of the URL, finally version of HTTP being used
- following lines are optional headers defined by key val pairs, then optional body (the start of this is delimited from the headers with two new lines)
- above example asking to `GET` resource found at `/hypertext/WWW/Helping.html` path
- version used is `HTTP/1.1`
- this followed by two headers
    - first requested host (i.e. domain name)
    - second specifies type of resources that the client will accept (always MIMe type), this case we ask for HTML

## Response
- response to above
```
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```
- HTTP response syntax
```
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```
- similar to request syntax, major difference is first line represents the version and the status of the response
- understanding meaning of common HTTP verbs, status codes, and header is important

## Verbs
- several verbs to describe what HTTP request

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

## Status Codes
- important to use standard HTTP status in HTTP responses so that client of request can know how to interpret request
- partioned in five blocks
    - 1xx - Informational.
    - 2xx - Success.
    - 3xx - Redirect to some other location, or that the previously cached resource is still valid.
    - 4xx - Client errors. The request is invalid.
    - 5xx - Server errors. The request cannot be satisfied due to an error on the server.
- within those ranges here are some more common codes

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

## Headers
- HTTP headers specify metadata about a request or response
- includes how to handle security, caching, data formats, and cookies
- common headers

| Header                      | Example                              | Meaning                                                                                                                                                                        |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
| Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                                                                                            |
| Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |

## Body
- format is defined by `Content-Type` header
- for example, could be HTML text (txt/html), binaray image (image/png), JSON (application/json), or JavaScript (text/javascript)
- may specify format using `accept` header

## Cookies
- HTTP itself is stateless
    - means one request doesn't know anything about a previous or future request
- this does not mean a server or client cannaot track state across requests
- common method for tracking state is `cookie`
- generated by a server and passes to client as HTTP header
```
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```
- client then caches cookies and returns as HTTP header
```
HTTP/2 200
Cookie: myAppCookie=tasty
```
- allows server to remember things like lang pref or user authentication credits
- use cookies to track, and share, everything user does

## HTTP Versions

| Year | Version | Features                                        |
| ---- | ------- | ----------------------------------------------- |
| 1990 | HTTP0.9 | one line, no versions, only get                 |
| 1996 | HTTP1   | get/post, header, status codes, content-type    |
| 1997 | HTTP1.1 | put/patch/delete/options, persistent connection |
| 2015 | HTTP2   | multiplex, server push, binary representation   |
| 2022 | HTTP3   | QUIC for transport protocol, always encrypted   |