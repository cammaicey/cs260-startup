# Ports
- connect to a device on the internet you need both an IP address and a numbered port
- port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication)
- HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device
- internet governing body, IANA, defines the standard usage for port numbers
- 0 to 1023 represent standard protocols
    - web service should avoid these ports unless it is providing the protocol represented by the standard
- 1024 to 49151 represent ports that have been assigned to requesting entities
    - common for these ports to be used by services running internally on a device
- 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device
    - [Link](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) to IANA's registry
- common port numbers

| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

## Your Ports
- ports used looking at your web server
- web server you externally exposed port 22 so that you could use SSH to open a remote console on the server
- port 443 for secure HTTP communication
- port 80 for unsecure HTTP communication

![port diagram](https://github.com/webprogramming260/.github/raw/main/profile/webServices/ports/webServicesPorts.jpg)
- web service, Caddy, is listening on ports 80 and 443
- gets a request on port 80, it automatically redirects the request to port 443 so that a secure connection is used
- request on port 443 it examines the path provided in the HTTP request (as defined by the URL) and if the path matches a static file, it reads the file off disk and returns it
- HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port (e.g. 3000 or 4000) and passes the request to the service
- have as many web services running as you would like
    - make sure that each one uses a different port to communicate
    - Simon service on port 3000
    - port 4000 for your startup
- only matters that you are consistent and that they are only used by one service