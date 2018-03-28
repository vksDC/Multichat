module.exports = function (httpsServer) {
    var config = require('../config');
    var WebSocketServer = require('ws').Server;
    var wss = new WebSocketServer({ 'server': httpsServer });

    wss.on('error', onError);
    wss.on('listening', onListening); //to save all the connections from clients as well as other info

    var connections = [];
    wss.on('connection', function (ws) {
        console.log('Creating connection with WebSocketServer');
        ws.on('close', function () {
            console.log('Closing connection with WebSocketServer');
        });
    });

    function isJson(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }

    function onError(err) {
        console.error(err.message);
        process.exit(1);
    }

    function onListening() {
        console.log('The Websocket server is running on PORT: ' + config.port);
    }
};