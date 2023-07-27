const Hapi = require('@hapi/hapi');
const path = require('path')
const routes = require('./routes.js')
const Inert = require('@hapi/inert')
const init = async () => {
    const server = Hapi.server({
        port: 1000,
        host: '0.0.0.0',
    });

    await server.register(Inert);

    // server.route(routes);

    server.route({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: './src',
                listing: false,
                index: true
            }
        }
    })

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();