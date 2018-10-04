const fastify = require('fastify');

const app = fastify({
    logger: false // process.env.NODE_ENV !== 'production'
});

app.get('/', async (req, res) => {
    return 'hello fastify'
});

module.exports = app;