const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index", {});
});

let port = 5501;
app.listen(port, function() {
    console.log("Server has started Sucessfully on port: " + port);
});