import io = require('socket.io')

var socketManager = io.listen(4000);

socketManager.sockets.on('connection', socket => {
    socket.on('my event', data => {
        console.log(data);
    });
});