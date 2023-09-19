# Amazon Web Services - Route 53
- wanna create secure HTTPS connection to my application, not possible with just an IP
    - therefore wanna make domain name
- `Route 53` is AWS service that handles DNS stuff
    - can buy domain, host domain, create DNS records

## Purchasing a Domain Name
- leasing for a year so make sure I like the name
- instructions for this on class github

## Manage DNS Records
- after bought name, use it to create DNS records to map domain names to IP addresses (A records) or other names (CNAME records)
- you want your root domain name, and any subdomain of your root domain, to map to the IP address of the web server you created previously
- instructions in class github
- right now the browser will say the domain is not secure, we'll resolve later

## Other Record Types
- `NS` and `SOA` are important for working with DNS
    - these were created automatically when registered domain name
- **NS**: name server, contains names of authoritative name servers that authorize you to place DNS records in this DNS server
- authoritative name server can verify that the DNS records and the DNS registration match and are authorized to represent the domain name when defining DNS records
- **SOA**: start of authority, provides contact info about the owner of this domain name

## Lease a Domain Name
1. Open the AWS browser console and log in.
2. Use Route 53 to purchase a domain name.
3. Set up your DNS records using Route 53. Make sure you have a record representing your root domain name, and a wild card subdomain.
4. Test that you can access your server using your domain name and any subdomain name.

- common problems at end of class github