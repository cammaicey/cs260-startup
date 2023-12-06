# OWASP
- Open Web Application Security Project (OWASP) is a non-profit research entity that manages the Top Ten list of the most important web application security risks

## A01 Broken Access Control
- occurs when the application doesn't properly enforce permissions on users
- example of broken access control, consider an application where the UI only provides a navigation to the administrator application settings if the user is an administrato
- attacker can simply change the URL to point to the application settings URL and gain access
- mitagations
    - Strict access enforcement at the service level
    - Clearly defined roles and elevation paths

## A02 Cryptographic Failures
- occur when sensitive data is accessible either without encryption, with weak encryption protocols, or when cryptographic protections are ignored
- unencrypted data over a public network connection allows an attacker to capture the data
- examples of ineffective cryptographic methods include hashing algorithms like MD5 and SHA-1 that are trivial to crack with modern hardware
- another cryptographic failure happens when applications do not validate the provided web certificate when establishing a network connection
- mitigations
    - Use strong encryption for all data. This includes external, internal, in transit, and at rest data.
    - Updating encryption algorithms as older algorithms become compromised.
    - Properly using cryptographic safeguards.

## A03 Injection
- occur when an attacker is allowed to supply data that is then injected into a context where it violates the expected use of the user input
- example, consider an input field that is only expected to contain a user's password
- attacker supplies a SQL database command in the password
Supplied Password
```
`p@ssword!'; DROP TABLE db; --`;
```
Template query
```
`SELECT user FROM db WHERE password='${password}' LIMIT 1`;
```
- supplied input is injected into the template an unintended query results
Resulting query
```
SELECT user FROM db WHERE password='p@ssword!'; DROP TABLE db; -- ` LIMIT 1
```
- mitigations
    - Sanitizing input
    - Use database prepared statements
    - Restricting execution rights
    - Limit output

## A04 Insecure Design
- broadly refers to architectural flaws that are unique for individual systems, rather than implementation errors
- application team doesn't focus on security when designing a system, or doesn't continuously reevaluate the application's security
- exploits are based upon unexpected uses of the business logic that controls the functionality of the application
- example, if the application allows for trial accounts to be easily created, then an attacker could create a denial of service attack by creating millions of accounts and utilizing the maximum allowable usage
- mitigations
    - Integration testing
    - Strict access control
    - Security education
    - Security design pattern usages
    - Scenario reviews

## A05 Security Misconfiguration
- exploit the configuration of an application
- examples include using default passwords, not updating software, exposing configuration settings, or enabling unsecured remote config
- example, some third party utilities, such as a logging system, will expose a public administration interface that has a default user name and password
- mitigations
    - Configuration reviews
    - Setting defaults to disable all access
    - Automated configuration audits
    - Requiring multiple layers of access for remote configuration

## A06 Vulnerable and Outdated Components
- longer an application has been deployed, the more likely it is that the attack surface, and corresponding exploits, of the application will increase
- packages are updated in order to address security concerns, or somethings the packages stop being supported
- request to install NPM packages displays the following warning

```
➜  npm install

up to date, audited 1421 packages in 3s

7 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```
- mitigations
    - Keeping a manifest of your software stack including versions
    - Reviewing security bulletins
    - Regularly updating software
    - Required components to be up to date
    - Replacing unsupported software

## A07 Identification and Authentication Failures
- any situation where a user's identity can be impersonated or assumed by an attacker
- example, if an attacker can repeatedly attempt to guess a user's password, then eventually they will be successful
- if passwords are exposed outside of the application, or are stored inside the application, with weak cryptographic protection, then they are susceptible to attack
- example of an identification failure would be a weak password recovery process that doesn't properly verify the user
- mitigations
    - Rate limiting requests
    - Properly managing credentials
    - Multifactor authentication
    - Authentication recovery

## A08 Software and Data Integrity Failure
- represent attacks that allow external software, processes, or data to compromise your app
- using open source packages without conducting a security audit, gives them an unknown amount of control over your app
- use of a third party continuous delivery (CD) pipeline
- CD provider is penetrated by an attacker then they also gain access to your production cloud environment
- example is the use of an NPM package that is controlled by an attacker
- mitigations
    - Only using trusted package repositories
    - Using your own private vetted repository
    - Audit all updates to third party packages and data sources

## A09 Security Logging and Monitoring Failures
- monitoring, logging, and alerting is critical to increasing security
- secure system will store logs that are accessible, immutable, and contain adequate information to detect an intrusion
- create a smoke screen in the monitoring system in order to hide a true attack
- mitigations
    - Real time log processing
    - Automated alerts for metric threshold violations
    - Periodic log reviews
    - Visual dashboards for key indicators

## A10 Server Side Request Forgery (SSRF)
- causes the application service to make unintended internal requests, that utilized the service's elevated privileges, in order to expose internal data or services
- example, if your service exposed an endpoint that let a user retrieve an external profile image based upon a supplied URL, an attacker could change the URL to point to a location that is normally only available to the service internally
- following theoretically return the internal AWS service metadata that includes the administrative access token
```
curl https://yourdomain.click/user/image?imgUrl=http://169.254.169.254/latest/meta-data/iam/security-credentials/Admin-Role
```
- mitigations
    - Sanitizing returned data
    - Not returning data
    - Whitelisting accessible domains
    - Rejecting HTTP redirects