const dotenv = require("dotenv");
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI).then(resp => {
    console.log("Database Connected!")
}).catch(error => console.log("Unable to connect to DB!" + error));

app.get("/", (req, res) => {
    res.send("Welcome to Invoice Calculator Servers!");
})

app.all("*", function (req, res) {
    res.status(404).send("Invoice Calculator Servers!");
});

const server = app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Server started at ${process.env.PORT}!`);
})