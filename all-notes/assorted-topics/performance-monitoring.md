# Performance Monitoring
- statistics show the impact that just one second of delay can make

![stats](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/performanceMonitoring/performanceLatencyImpact.jpg)
- prevent losing users, you want your application to load in about one second
- consistently measure and improve the responsiveness of your app
- main things to monitor
    1. Browser application latency
    2. Network latency
    3. Service endpoint latency
- latency is defined as the delay that your user experiences before a request is satisfied

## Browser Application Latency
- impacted by the speed of the user's device, the amount of data that needs to be processed, and the time complexity of the processing algorithm
- browser will request your index.html page
- requests for any files that index.html links, such as JavaScript, CSS, video, and image files
- JavaScript is loaded, it will start making requests to services
    - endpoints that your provide as well as ones provided by third parties
- reduces the impact of file size, and HTTP requests in general, by doing one or more of the following
    1. Use compression when transferring files over HTTP
    2. Reduce the quality of images and video to the lowest acceptable level
    3. Minify JavaScript and CSS. This removes all whitespace and creates smaller variable names
    4. Use HTTP/2 or HTTP/3 so that your HTTP headers are compressed and the communication protocol is more efficient
- reduce the number of requests you make by combining the responses from multiple endpoint requests into a single request

## Network Latency
- pay a latency price for every network request that you make
- avoid making unnecessary or large requests
- impacted by the amount of data that you send, the amount of data a user can receive per second (this is called bandwidth), and the distance the data has to travel
- low bandwidth connection that can only receive data at rates lower than 1 megabit per second, then you need to be very careful to reduce the number of bytes
- Global latency is also a problem for users
- mitigate the impact of global latency by hosting your application files in data centers that are close to the users you are trying to serve

## Service Endpoint Latency
- impacted by the number of request that are made and the amount of time that it takes to process each request
- request to a service endpoint there is usually some functionality in the application that is blocked until the endpoint returns
- user requests the scores for a game, the application will delay rendering until those scores are returned
- keep the endpoint latency to less than 10 milliseconds (ms)

## Performance Tools
### Chrome Network Tab
- see the network requests made by your application and the time necessary for each request, by using the browser's debugging tools
- sort by `time` or `size`, it will be clearer what areas need your attention
- clear your cache before running tests so that you can see what the real latency is and not just the time it takes to load from the browser's cache

![browser debugger](https://github.com/webprogramming260/.github/raw/main/profile/uxdesign/designPerformanceNetwork.jpg)

### Simulating Real Users
- simulate a 3G network connection that you would find on a low end mobile phone

![simulation](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/performanceMonitoring/webFrameworksThrottleNetwork.jpg)
- useful since web developers often have high end computers

### Chrome Lighthouse
- analysis of your app
- average performance rating based upon the initial load time, longest content paint, and time before the user can interact with the page

![lighthouse](https://github.com/webprogramming260/.github/raw/main/profile/uxdesign/designPerformance.jpg)

### Chrome Performance Tab
- frontend performance make sure you experiment with the Chrome debugger's performance tab
- details of your application based upon discrete intervals of time so that you can isolate where things are running slow

![simon performance](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/performanceMonitoring/webFrameworksChromePerformanceTab.jpg)
- profiling the performance by pressing the record button and then interacting with your app
- records memory usage, screenshots, and timing information
- press the stop recording button and review the collected data

### Global Speed Test
- results for running a test using Pingdom.com

![results](https://github.com/webprogramming260/.github/blob/main/profile/webFrameworks/performanceMonitoring/webFrameworksPingdom.jpg)
- correctly suggesting that we enable gz compression on our transmitted data in order to increase performance, and to add headers that will enable caching on the browser
- tool provided by DotComTools allows you to run tests from multiple locations at once

![multiple](https://github.com/webprogramming260/.github/blob/main/profile/webFrameworks/performanceMonitoring/webFrameworksDotComTools.jpg)