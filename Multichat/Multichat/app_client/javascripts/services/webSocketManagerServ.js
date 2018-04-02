angular.module('multichatApp').service('webSocketManager', function ($websocket, growl, utils) {
    if (!window.WebSocket)
    {
        console.log("WebSockets NOT supported.");
        alert("Consider updating your browser for a better experience.");
    }

    var HOST = location.origin.replace(/^http/, 'ws');
    var ws = $websocket(HOST);
    ws.onOpen(function () {
        console.log("Open");
        growl.success('Server started. Enjoy!', { title: 'Success', });
        setInterval(function () {
            ws.send('ping at ' + new Date().getUTCSeconds());
        }, 30000);
    });

    window.onbeforeunload = function () {
        ws.close();
    };

    ws.onMessage(function (message) {
        if (utils.isJson(message.data))
        {
            var obj = JSON.parse(message.data);
        }
    });

    var methods = {
        ws: ws,
    };

    return methods;
});