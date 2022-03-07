import { createServer } from "http";
import { Server } from "socket.io";
const http = createServer();
const io = new Server(http, {pingInterval: 1000});

import relation from "./relation";

var allClients = [];

const handle = (type, response) => {
  io.sockets.emit(type, response);
};

relation();

io.on("connection", async (socket) => {
    allClients.push(socket);
    socket.on('disconnect', function() {
      console.log('Got disconnect!');
      var i = allClients.indexOf(socket);
      allClients.splice(i, 1);
      console.log(allClients.length);
    });
});

http.listen(3050, () => {
  console.log("LISTENING PORT: 3050");
});
