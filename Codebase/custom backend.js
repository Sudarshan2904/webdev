const http = require("http");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('cb/custom backend.html')
const contact = fs.readFileSync('cb/contact.html')
const services = fs.readFileSync('cb/services.html')
const about = fs.readFileSync('cb/about.html')


const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(url == '/') {
        res.end(home);
    }

    else if(url == '/about') {
        res.end(about);
    }

    else if(url == '/services') {
        res.end(services);
    }
    else {
        res.statusCode = 404;
        res.end("404 not found");
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});