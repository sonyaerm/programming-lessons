const http = require("http");
const fs = require("fs");

const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if(request.url === "/home" || request.url === "/"){
    fs.appendFileSync("hello.txt", "/home");
    response.write("<h2>Home</h2>");
    }
    else if(request.url == "/about"){
    response.write("<h2>About</h2>");
    fs.appendFileSync("hello.txt", "/about");
    }
    else if(request.url == "/contact"){
    response.write("<h2>Contacts</h2>");
    fs.appendFileSync("hello.txt", "/contact");
    }
    else{
    response.write("<h2>Not found</h2>");
    fs.appendFileSync("hello.txt", "Not found");
    }
    response.end();
};
http.createServer(requestHandler).listen(3000);
