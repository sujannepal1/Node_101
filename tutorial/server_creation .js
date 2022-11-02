const fs = require('fs');

const http = require("http");
//url does routing 
const url = require("url");

// Server 15 min routing

const server = http.createServer((req, res) => {
    pathName = req.url
        // res.end('Hello from the server side');
    if (pathName === '/' || pathName === '/overview') {
        res.end("THis is hte Overview")
    } else if (pathName === "/product") {
        res.end("This is the product page")
    } else if (pathName === "/api") {
        fs.readFile(`${__dirname}/./node-farm-master/dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data)
            console.log(productData);
        })
    } else {
        res.writeHead(404);
        res.end("<h1>Error 404<h1>");
    }
});

server.listen(8000, '127.0.0.1', () => {
        console.log("Server start and listening in port 8000")
    })
    //127.0.0.1 is default ip