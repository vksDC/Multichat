﻿angular.module('multichatApp').service('webSocketManager', function ($websocket, growl, utils) {
    if (!window.WebSocket)
    {
        console.log("WebSockets NOT supported.");
        alert("Consider updating your browser for a better experience.");
    }

    var HOST = location.origin.replace(/^http/, 'ws');
    var ws = $websocket(HOST);
    var peopleManagement = new PeopleManagement(ws, growl);
    var audioManagement = new AudioManagement(ws, growl);

    ws.onOpen(function () {
        peopleManagement.setLoading(false);
        growl.success('Server started. Enjoy!', { title: 'Success' });
        setInterval(function () {
            ws.send('ping at ' + new Date().getUTCSeconds());
        }, 30000);
    });

    window.onbeforeunload = function () {
        //disconnect current user
        peopleManagement.setDisconnected();
        ws.close();
    };

    ws.onMessage(function (message) {
        if (utils.isJson(message.data))
        {
            var obj = JSON.parse(message.data);
            switch (obj.section) {
                case "people":
                    if (obj.data.operation === 'connected')
                        peopleManagement.addPerson(obj.data);
                    else if (obj.data.operation === 'disconnected')
                        peopleManagement.deletePerson(obj.data);
                    break;
                case "audio":
                    audioManagement.updateAudioUrl(obj.data.url);
                    break;
            }
        }
    });

    var methods = {
        ws: ws,
        peopleManagement: peopleManagement,
        audioManagement: audioManagement
    };

    return methods;
});