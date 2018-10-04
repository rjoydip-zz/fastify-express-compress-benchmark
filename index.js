"use strict";

global.isExpress = process.env.NODE_ENV === 'fastify' ? false: process.env.NODE_ENV === 'express' ? true: true;
global.isCompress = process.env.IS_COMPRESS || false;

const app = global.isExpress ? require('./express') : require('./fastify');

(async () => {
    if (!global.isExpress && global.isCompress) {
        app.register(
            require('fastify-compress'), {
                global: false
            }
        );
        await app.ready();
    }
    await app.listen(process.env.PORT || 3000);
})();