const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res)=>{
    if(req.url === "/api/datapath"){
        const data = fs.readFileSync("data.json","utf-8");
        res.end(data);
    }
});
server.listen(3000, ()=>{
    console.log("Server is localhost at 3000");
});