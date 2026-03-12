/*const http =require("http");
const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    if (method ==="GET" && url ==="/") {
        res.writeHead(200, {"Content-Type":"text/plain" });
        res.end("Welcome to the Home Page");
    }
});
server.listen(3000,() => {
    console.log("ATMKBFJG");
});*/
const http =require("http");
const server = http.createServer((req, res) => {
    const method = req.method;
    const url = new URL(req.url, `http://${req.headers.host}`);
        const query = url.searchParams;
    if(method === "GET" && url.pathname.startsWith("/users")){
        res.end("hello user!");
    }
    if(method === "GET" && url.pathname.startsWith("/product")){
        res.end("hello from the products section!");
    }
});
server.listen(3000,() => {console.log("server running on port 3000");
});
