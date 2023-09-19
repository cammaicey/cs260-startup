# Caddy
- web service that listens for incoming HTTP requests
- serves up the requested static files or routes the request to another web service
- ability to route requests is `gateway` or `reverse proxy`, allows exposure of multiple web services as single external web service
- Caddy in the course:
    -Caddy handles all of the creation and rotation of web certificates. This allows us to easily support HTTPS
    - serves up all of your static HTML, CSS, and JavaScript files. All of your early application work will be hosted as static files
    - acts as a gateway for subdomain requests to your Simon and startup application services
        - when a request is made to `simon.yourdomain` Caddy will proxy the request to the Simon application running with node.js as an internal web service
        - ![screenshot from class github]("C:\Users\Camrynn Helliwell\OneDrive\Pictures\Screenshots\cs260notes\caddy-diagram.jpg")
- preinstalled and configured on your server, you just have to configure your root domain

## Important Caddy Files
- as part of the installation, created two links in the Ubuntu user's home directory that point to the key Caddy configuration files
    - **Configuration File**: `~/Caddyfile`
        - Contains the definitions for routing HTTP requests that Caddy receives
        - used to determine the location where static HTML files are loaded from, and also to proxy requests into the services you will create later
        - Except for when you configure the domain name of your server, you should never have to modify this file manually
    - **HTML Files**: `~/public_html`
        - directory of files that Caddy servers up when requests are made to the root or your web server
        - Caddyfile you will see that the static file server is mapped to `/usr/share/caddy`
        - That is the location that the file link in the Ubuntu user's home directory, `~/public_html`, is pointing to
- whenever Caddy receives an HTTP request for any domain name on port 80 it will use the path of the request to find a corresponding file in this directory
    - `http://yourdomainname/index.html` looks for file named `index.html` in `public_html` dir