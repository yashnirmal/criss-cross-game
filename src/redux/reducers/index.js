const roomInitialState = null;

export const joinRoomReducer = (state=roomInitialState,action)=>{
    switch(action.type){
        case "JOIN ROOM":
            return state = action.payload;
        default:
            return state;
    }
}