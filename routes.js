const path = require('path');
const showPage = require('./handler');
const routes = {
    method: 'GET',
    path: '/',
    handler: showPage
}

module.exports = routes;