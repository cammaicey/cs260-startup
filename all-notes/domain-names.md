# Domain Names
- get IP for any domain with `dig`
    - `dig amazon.com`
    - multiple IP addresses in case one fails
- domain name, simply text string with a specific naming convention
    - listed in database called domain name registry
- names are broken up
    - root domain
    - one or more possible subdomain prefixes
    - root domain repped by secondary level domain and top level domain (TDL)
        - TDL is `com`, `edu`, or `click`
    - root domain would look like `byu.edu` or `google.com`
    - `[subdomain].*secondary.top` root is the `secondary.top`
        - `react.simon.cs260.click`
- owner of domain can create any number of sub domains off root
    - each sub may resolve in different IP
- you can get info about domain name from the domain name registry
    - `whois` console command
    - `whois byu.edu`
    - provides info like technical contact (if issues with domain), adminstrative contact (if you buy domain)

# DNS
- Once a domain name is in the registry it can be listed with a domain name system (DNS) server and associated with an IP address
- Every DNS server in the world references a few special DNS servers that are considered the `authoritative name servers` for associating a domain name with an IP address
- DNS database records facilitate mapping of domain names to IPs, different flavors
    - main ones we worry about are `address (A)` and `canonical name (CNAME)`
    - `A` straight mapping from domain name to IP
    - `CNAME` maps one domain name to another
        - acts as a domain alias
        - you would use _CNAME_ to maps `byu.com` to `byu.edu`, makes it so either one works
- when entering a domain name, browser checks to see if name is already in it's cache
    - if not contacts DNS server and gets IP
- DNS server also keeps a cache of names
    - if domain not in cacher it will request name from `authoritative name server`
        - if authority doesn't know --> **unkown domain error**
        - if process does resolve --> browser makes HTTP connection to associated IP
- when dealing with updating info associated with domain name `time to live (TTL)`
    - TTL setting for domain record
    - can set it to 5 minutes or even several days
    - The different caching layers should then honor the TTL and clear their cache after the requested period has passed

# Buying a Domain Name
- pay to lease unused domain name for a specific period
    - before expires you can extend the lease
- cost to lease can be $3 to $200 a year
    - buying or leasing from a sub-party can be expensive
    - better off buying something obscure