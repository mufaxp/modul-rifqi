const path = require('path')
const showPage = (request, reply) => {
    return reply.file(path.join(__dirname, '/src/index.html'))
}

module.exports= showPage;