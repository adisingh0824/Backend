const express=require("express");
const app=express();
app.get("/users", (req, res) => {
    res.json({name: "aditya"});
});


app.listen(300, () =>  {
    console.log("Server started on port 3000");
});