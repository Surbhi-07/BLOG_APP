const express = require('express');
const cors = require('cors');
const app = express();
require('./Database/connection');
const dotenv = require("dotenv");

app.use(express.json())
app.use(cors())
app.use('/user', require('./Route/auth'));
app.use('/blog', require('./Route/post'))

if (process.env.NODE_ENV === "production") {
    // Serve any static files
    index.use(express.static(path.resolve(__dirname, "../client/build")));
    // Handle React routing, return all requests to React app
    index.get("*", function (req, res) {
        res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });
}

dotenv.config();
const host = '0.0.0.0';
const port = process.env.PORT || 7000;

app.listen(port, host, () => console.log(`Server started at port ${port}`))