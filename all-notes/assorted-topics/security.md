# Security Overview
- can see bad actors at work on your very own server by using `ssh` to open a console to your server and reviewing the authorization log
```
sudo less +G /var/log/auth.log
```

## Security Terminology
- Web application security, sometimes called AppSec, is a subset of cybersecurity that specifically focuses on preventing security vulnerabilities within end-user applications
- involves securing the frontend code running on the user's device and also the backend code running on the web server
- list of common phrases used by the security community
    - **Hacking** - The process of making a system do something it's not supposed to do.
    - **Exploit** - Code or input that takes advantage of a programming or configuration flaw.
    - **Attack Vector** - The method that a hacker employs to penetrate and exploit a system.
    - **Attack Surface** - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
    - **Attack Payload** - The actual code, or data, that a hacker delivers to a system in order to exploit it.
    - **Input sanitization** - "Cleaning" any input of potentially malicious data.
    - **Black box testing** - Testing an application without knowledge of the internals of the application.
    - **White box testing** - Testing an application by with knowledge of the source code and internal infrastructure.
    - **Penetration Testing** - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
    - **Mitigation** - The action taken to remove, or reduce, a threat.

## Motivation for Attackers
- common motives
    - **Disruption** - By overloading a system, encrypting essential data, or deleting critical infrastructure, an attacker can destroy normal business operations. This may be an attempt at extortion, or simply be an attempt to punish a business that that attacker does not agree with.
    - **Data exfiltration** - By privately extracting, or publicly exposing, a system's data, an attacker can embarrass the company, exploit insider information, sell the information to competitors, or leverage the information for additional attacks.
    - **Resource consumption** - By taking control of a company's computing resources an attacker can use it for other purposes such as mining cryptocurrency, gathering customer information, or attacking other systems.

## Examples of Security Failures
- security should always be a primary objective
- web application that looks good and performs well, is a lot less important than building an application that is secure

## Common Hacking Techniques
- common exploitation techniques
    - **Injection**: When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker can use a specially crafted query to make the database reveal hidden information or even delete the database.
    - **Cross-Site Scripting (XSS)**: A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.
    - **Denial of Service**: This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.
    - **Credential Stuffing**: People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password
    - **Social engineering** - Appealing to a human's desire to help, in order to gain unauthorized access or information.

## What Can I Do About It?
- learn the techniques a hacker uses to attack a system
- develop a security mindset, where you always assume any attack surface will be used against you
- security a consistent part of your app
- common security practices
    - **Sanitize input data** - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
    - **Logging** - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
    - **Traps** - Create what appears to be valuable information and then trigger alarms when the data is accessed.
    - **Educate** - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
    - **Reduce attack surfaces** - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
    - **Layered security** - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
    - **Least required access policy** - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
    - **Safeguard credentials** - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
    - **Public review** - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.