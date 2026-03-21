//ADD
const express=require("express");
const app=express();
app.get("/sum", (req, res) => {
    console.log(req.query);
    res.send(parseInt(req.query.a )+ parseInt(req.query.b));
    //res.json({name: "aditya"});
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
//SUBTRACT
const express=require("express");
const app=express();
app.get("/sub", (req, res) => {
    console.log(req.query);
    res.send(parseInt(req.query.a ) - parseInt(req.query.b));
    //res.json({name: "aditya"});
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
//MULTIPLY
const express=require("express");
const app=express();
app.get("/mult", (req, res) => {
    console.log(req.query);
    res.send(parseInt(req.query.a ) * parseInt(req.query.b));
    //res.json({name: "aditya"});
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
//// CREATE A MIDDLEWARE FUNCTION
// WHICH LOGS ALL OF THE INCOMING REQUEST
// IN TO A LOGS.TXT FILE