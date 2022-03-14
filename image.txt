const http = require("http");
const fs = require("fs");

const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url != '/favicon.ico') {
        if (request.url.endsWith('.jpg')) {
            let imgFile = request.url.slice(1);

            fs.readFile(imgFile, (err, data) => {
                response.setHeader("Content-Type", "image/jpg");
                response.write(data);
                response.end();
            });
        }
        else {
            getPage(request.url, response);
        }
    }
};

http.createServer(requestHandler).listen(3000);
function getPage(name, response) {
    if (name == '/') {
        name = 'Home';
    }
    fs.appendFileSync('hello.txt', "\n" + name);
    if (name == '/image' || name == '/image/1') {
        fs.readFile("pages/image1.html", (err, data) => {
            response.write(data);
        });
    }
    else if (name == '/image/2') {
        fs.readFile("pages/image2.html", (err, data) => {
            response.write(data);
        });
    }
    else if (name == '/image/3') {
        fs.readFile("pages/image3.html", (err, data) => {
            response.write(data);
        });
    }
    else if (name == '/image/4') {
        fs.readFile("pages/image4.html", (err, data) => {
            response.write(data);
        });
    }
    else if (name == '/image/5') {
        fs.readFile("pages/image5.html", (err, data) => {
            response.write(data);
        });
    }
    else if (name == '/image/6') {
        fs.readFile("pages/image6.html", (err, data) => {
            response.write(data);
        });
    }
    else if (name == '/image/7') {
        fs.readFile("pages/image7.html", (err, data) => {
            response.write(data);
        });
    }
    else {
        fs.readFile("pages/" + name + ".html", (err, data) => {
            if (!err) {
                response.write(data);
                response.end();
            } else {
                response.write("Page Not Found");
                response.end();
            }
        });
    }
}