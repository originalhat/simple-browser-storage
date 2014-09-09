var connect = require('connect');
var serveStatic = require('serve-static');
var port = 6060
connect().use(serveStatic(__dirname)).listen(port);
console.log('server running @ localhost:' + port);
