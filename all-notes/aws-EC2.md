* set region as US East (N. Virginia) - us-east-1
* *CaddyFile* config file for web service gateway
* *public html* contains all static files that you're serving up directly through Caddy when using it as web service
* *service* where to install all of web services once built
* make sure to use **http** not https to access the web page
# IP Address
* first elastic IP address is free but only while server is running
    - not running $0.005/hr
* **make sure to release elastic IP address when done**