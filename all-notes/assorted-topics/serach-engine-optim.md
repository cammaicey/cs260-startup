# Search Engine Optimization
- modifying your application for search results is called search engine optimization (SEO)
- several factors that are major contributors to your search rank
    1. Content
    2. Authoritative links
    3. Structure and organization
    4. Metadata
    5. Performance and usability

## Content
- host interesting, current, easily accessible content
- key is that there is lots of interesting content and that it is kept current
- provide both textual and video content
- content is available without authentication or payment

## Authoritative Links
- more websites that point to your application the higher its search ranking
- be an authority to yourself
- links from other applications that you own, and internal application links

## Structure and Organization
- properly use HTML elements to correctly define and organize your application
- Google search crawler is an automated bot
- content is not hidden behind JavaScript interactions
- important content should be rendered
- include the title and heading elements
- contain text that clearly defines the value of your content, and include keywords that you want in the search index

## Metadata
- several elements and attributes that search crawlers specifically target
- `description`, `robots`, social media open graph (`og`), and image alt attributes
- description for Simon, you would include something like the following
```
<meta name="description" content="Game play, news, rankings, tips, and instruction for Simon." />
```
- meta element instructs the crawler how to specifically index a given page
- image alt attribute tells the crawler the keywords for a given image
- open graph (og) meta tags are used by social media websites to give a preview of your app
```
<meta property="og:title" content="Play Simon online" />
<meta property="og:description" content="News, rankings, instruction, and competitive online play for Simon." />
<meta property="og:image" content="https://simon.cs260.click/simon.png" />
```

### Sitemap
- textual file that you distribute with your app
- major content pieces of your app
- aids in search crawler navigation
- sitemap file with a single entry
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://simon.cs260.click/news/2022-world-champion.html</loc>
    <lastmod>2023-01-17</lastmod>
  </url>
</urlset>
```

### Robots.txt
- robots.txt file tells the crawler what parts of your application is off limits
```
# cs260.com/robots.txt
# Tell Google not to crawl the game play path,
# because it won't be useful in Google Search results.
User-agent: googlebot
Disallow: /play/
```
- create the file with the specific name `robots.txt` and serve it from the root of your domain

## Performance and Usability
- check how performant your application is and how good the user experience (UX) is
- measurements such as the time it takes for the first byte to load, how long it takes to render the page, and how well your application works on mobile devices

## Tools
### Google Search
- querying Google with your domain name prefixed with `site:`
- current result for `site:simon.cs260.click`

![result](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/seo/seoGoogleSearch.jpg)

### PageSpeed Insights
- similar to the Chrome browser debugging tool Lighthouse, but it allows you to run it from a webpage
- performance and usability are key factors in determining your search ranking
- result of examining `simon.cs260.click`

![result](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/seo/seoPageSpeedInsights.jpg)
- there is no Robots.txt file and the description meta element is missing

![diggin in](https://github.com/webprogramming260/.github/blob/main/profile/webFrameworks/seo/seoPageSpeedInsightsSeo.jpg)

### Google Search Console
- many tools to help you understand how your application is being indexed and why
- performance, what pages are indexed, your mobile usability, and information about the site's overall user experience

![stats](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/seo/seoGoogleSearchConsole.jpg)
- add a DNS `TXT` record to your application's domain DNS information
- similar to when you added an `A` or `CNAME` record when you first set up your DNS information with the AWS Route 53 service

![TXT](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/seo/seoGoogleSearchConsoleVerify.jpg)
