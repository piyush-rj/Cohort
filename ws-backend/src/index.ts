import { WebSocketServer } from "ws"
import { createServer, Server } from "http"

const server: Server = createServer()
const wss = new WebSocketServer({server})

// event handler
wss.on("connection", function(socket) {
    // socket -> whenever a connection is made give me a path/ medium through which i can communicate with the users; similar to (req, res)

    console.log("user connected")

    socket.on("message", (e) => {
        if(e.toString() == "ping"){
            socket.send("pong")
        }
    })
})

server.listen(8080, () => {
    console.log("running")
})

