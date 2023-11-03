# PM2
- keep program running after shutdown, register as `daemon`
- east way to start and stop service `Process Manager 2`
- useful commands if you run into issues like server not running
```
pm2 ls
```
- ssh into server and see PM2
- should print out simon and startup
- some other commands

| Command                                                    | Purpose                                                                          |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **pm2 ls**                                                 | List all of the hosted node processes                                            |
| **pm2 monit**                                              | Visual monitor                                                                   |
| **pm2 start index.js -n simon**                            | Add a new process with an explicit name                                          |
| **pm2 start index.js -n startup -- 4000**                  | Add a new process with an explicit name and port parameter                       |
| **pm2 stop simon**                                         | Stop a process                                                                   |
| **pm2 restart simon**                                      | Restart a process                                                                |
| **pm2 delete simon**                                       | Delete a process from being hosted                                               |
| **pm2 delete all**                                         | Delete all processes                                                             |
| **pm2 save**                                               | Save the current processes across reboot                                         |
| **pm2 restart all**                                        | Reload all of the processes                                                      |
| **pm2 restart simon --update-env**                         | Reload process and update the node version to the current environment definition |
| **pm2 update**                                             | Reload pm2                                                                       |
| **pm2 start env.js --watch --ignore-watch="node_modules"** | Automatically reload service when index.js changes                               |
| **pm2 describe simon**                                     | Describe detailed process information                                            |
| **pm2 startup**                                            | Displays the command to run to keep PM2 running after a reboot.                  |
| **pm2 logs simon**                                         | Display process logs                                                             |
| **pm2 env 0**                                              | Display environment variables for process. Use `pm2 ls` to get the process ID    |

## Registering a New Web Service
- setup another subdomain that acess a different wb service
    1. Add the rule to the Caddyfile to tell it how to direct requests for the domain
    2. Create a directory and add the files for the web service
    3. Configure PM2 to host the web service

### Modofy Caddyfile
- SSH into server
- copy the section for the startup subdomain and alter it so that it represents the desired subdomain and give it a different port number that is not currently used on your server
```
tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
}
```
- tells Caddy when request for tacos.cs260.click it will act as a proxy for those requests and pass them on to the web service that is listening on the same machine (localhost), on port 5000
- other settings tell Caddy to return headers that disable caching, hide that Caddy is the server, and allow any other origin server to make endpoint requests to this subdomain (basically disabling CORS)
- restart Caddy to load new settings
```
sudo service caddy restart
```

### Create Web Service
- Copy the `~/services/startup` directory to a directory that represents the purpose of your service
```
cp -r ~/services/startup ~/services/tacos
```
- following JavaScript that causes the web service to listen on a port that is provided as an argument
```
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```
- directory named public that has static HTML/CSS/JavaScript files that your web service will respond with when requested
- `index.js` file enables this with the following
```
app.use(express.static('public'));
```
- start up the web service, listening on port 5000, using Node
```
node index.js 5000
```
- can now access your web service through the browser, or `curl`
```
curl https://tacos.cs260.click
```
- stop your web service by pressing CTRL-C in the SSH console that you used to start the service

### Configure PM2 to Host the Web Service
- problem with running your web service console with `node index.js 5000`, as you close your SSH session it will terminate all processes you started in session, including web service
- need something always running aka `daemons` (PM2)
- from SSH console sesh
```
pm2 ls
```
- list the web services that you already have registered with PM2
- make sure you are in your service directory, and run the command similar to the following, with the service name and port substituted to your desire
```
cd ~/services/tacos
pm2 start index.js -n tacos -- 5000
pm2 save
```
- run `pm2 ls` again you should see your web service listed
- PM2 keep running your service even after you exit your SSH