const express = require('express');
const root = express.Router();

root.get("/test", (req, res ) => {
    res.send("ok");
});

module.exports = root;