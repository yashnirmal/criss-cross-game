import { io } from "socket.io-client";

// const mSocket = io("https://crisscross-pvp-backend.herokuapp.com/");
const mSocket = io("http://localhost:8000/");

mSocket.on("connect",()=>{
    console.log(mSocket.id);
})

export default mSocket;
