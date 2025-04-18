"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const http_1 = require("http");
const server = (0, http_1.createServer)();
const wss = new ws_1.WebSocketServer({ server });
// event handler
wss.on("connection", function (socket) {
    // socket -> whenever a connection is made give me a path/ medium through which i can communicate with the users; similar to (req, res)
    console.log("user connected");
    socket.on("message", (e) => {
        if (e.toString() == "ping") {
            socket.send("pong");
        }
    });
});
server.listen(8080, () => {
    console.log("running");
});
