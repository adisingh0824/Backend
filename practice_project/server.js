//clint mujhe jab pisy request send kra ga tab vo mujhe user ka data beja ga json format ma us data ko ma phela request .event se collect kru ga
//isa ka  bada muje is ko likna ha json wala file m
//is ka liya forst i will read the dta of file and thenn conver the n into noraml java script n jo user ka data h us ko bhi convert kru ga phir push kru ga array ma
const http = require("http");
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "data.json");
http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/api/data") {
        fs.readFile(file, "utf8", (err, data) => {
            if (err) return res.end("Error reading file");
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(data);
        });
    }
    else {
        res.writeHead(404);
        res.end("Route not found 😢");
    }
}).listen(3000, () => console.log("Server running on port 3000"));

























