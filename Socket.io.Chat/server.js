var io = require('socket.io');

var socketManager = io.listen(4000);

socketManager.sockets.on('connection', function (socket) {
    socket.on('my event', function (data) {
        console.log(data);
    });
});
//# sourceMappingURL=server.js.map
