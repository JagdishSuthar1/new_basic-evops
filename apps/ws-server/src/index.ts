import {WebSocketServer} from "ws"
import {prisma } from "@repo/db/client"
const server = new WebSocketServer(
    {
        port : 3001
    }
)


server.on("connection" , async(socket)=>{
    await prisma.user.create({
        data : {
            name : Math.random().toString(),
            password : Math.random().toString()
        }
    })
    socket.send("You are connected to Web Server")
})