const express = require('express');
const compression = require('compression');

const app = express();

if(global.isCompress) {
    app.use(compression());
}

app.get('/', async (req, res) => {
    res.send('hello fastify');
});

module.exports = app;