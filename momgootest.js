const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});