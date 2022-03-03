const http = require("http");
const requestHandler = (request, response) => {
response.end("Hello world!");
};
http.createServer(requestHandler).listen(3000);