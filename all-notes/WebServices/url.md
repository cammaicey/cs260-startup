# URL
- Uniform Resource Locator (URL) represents the location of a web resource
    - can be anything, such as a web page, font, image, video stream, database record, or JSON object
    - also be completely ephemeral, such as a visitation counter, or gaming session
- example URL that represents the summary of accepted CS 260 BYU students that is accessible using secure HTTP
```
https://byu.edu:443/cs/260/student?filter=accepted#summary
```
- url syntax
```
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
```

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                     |

## URL, URN, and URI
- Uniform Resource Name (URN) is a unique resource name that does not specify location information
    - book URN might be `urn:isbn:10,0765350386`
- Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN
- almost always talking about URLs and therefore you should not use the more general URI