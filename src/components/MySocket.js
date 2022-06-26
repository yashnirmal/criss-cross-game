import { io } from "socket.io-client";

const mSocket = io("https://crisscross-pvp-backend.herokuapp.com/");
mSocket.on("connect",()=>{
    console.log(mSocket.id);
})

export default mSocket;
