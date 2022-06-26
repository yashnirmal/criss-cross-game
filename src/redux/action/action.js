export const joinRoom = (room)=>{
    return {
        type:"JOIN ROOM",
        payload: room
    }
}