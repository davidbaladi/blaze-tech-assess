const express = require("express");

const co = require("cors");

const server = () => {
    const app = express();
    app.get('/api', (req, res) => {
        req.status(200).send
    });
    return app;
}

module.exports = server;